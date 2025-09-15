import ImageQaForm from "@/components/image-qa-form";

export default function ImageQualityAssurancePage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
          Image Quality Assurance
        </h1>
        <p className="text-muted-foreground">
          Upload an image to assess its quality and relevance for the website using AI.
        </p>
      </div>

      <div className="mt-8">
        <ImageQaForm />
      </div>
    </div>
  );
}
