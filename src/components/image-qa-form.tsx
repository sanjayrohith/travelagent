"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { checkImageQuality } from "@/app/admin/image-qa/actions";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AssessmentResult = {
  isHighQuality: boolean;
  reason?: string;
} | null;

export default function ImageQaForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AssessmentResult>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 4 * 1024 * 1024) { // 4MB limit for Gemini
        toast({
          title: "File too large",
          description: "Please select an image smaller than 4MB.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
      setResult(null);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select an image to assess.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Data = reader.result as string;
      try {
        const assessment = await checkImageQuality(base64Data);
        setResult(assessment);
      } catch (error) {
        toast({
          title: "Assessment Failed",
          description: "An error occurred while assessing the image.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = () => {
        setIsLoading(false);
        toast({
            title: "File Read Error",
            description: "Could not read the selected file.",
            variant: "destructive",
        });
    };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Upload Image</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input type="file" accept="image/*" onChange={handleFileChange} />

          {preview && (
            <div className="relative mx-auto h-64 w-full max-w-md overflow-hidden rounded-md border">
              <Image src={preview} alt="Image preview" fill className="object-contain" />
            </div>
          )}

          <Button type="submit" disabled={isLoading || !file} className="w-full">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isLoading ? "Assessing..." : "Assess Image"}
          </Button>
        </form>

        {result && (
          <div className="mt-6 rounded-lg border p-4">
            <h3 className="mb-4 font-headline text-lg font-semibold">Assessment Result</h3>
            {result.isHighQuality ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <p className="font-semibold">High Quality & Relevant</p>
              </div>
            ) : (
              <div className="space-y-2 text-red-600">
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  <p className="font-semibold">Low Quality or Irrelevant</p>
                </div>
                {result.reason && (
                  <p className="pl-7 text-sm text-muted-foreground">
                    <strong>Reason:</strong> {result.reason}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
