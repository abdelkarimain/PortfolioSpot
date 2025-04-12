import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, FormEvent, useTransition, useRef } from "react";
import { toast } from "sonner";
import { submitPortfolio } from "@/actions/portfolio";
import { useRouter } from "next/navigation";

export default function SubmitPortfolio() {
  const [formData, setFormData] = useState({
    owner: "",
    url: "",
    github: "",
    technologies: "",
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const closeDialogRef = useRef<HTMLButtonElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.owner || !formData.url) {
      toast.error("Missing information", {
        description: "Please fill in your name and website URL.",
      });
      return;
    }

    startTransition(async () => {
      try {
        const result = await submitPortfolio(formData);

        if (result.success) {
          toast.success("Portfolio submitted", {
            description: "Thank you for submitting your portfolio!",
          });
          setFormData({ owner: "", url: "", github: "", technologies: "" });
          router.refresh();
          if (closeDialogRef.current) {
            closeDialogRef.current.click();
          }
        } else {
          throw new Error(result.error || "Something went wrong");
        }
      } catch (error) {
        toast.error("Submission failed", {
          description:
            error instanceof Error ? error.message : "Please try again later.",
        });
      }
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="hover:text-primary px-1 transition-colors capitalize cursor-pointer"
          variant="outline"
          aria-label="Toggle menu"
        >
          <Send className="size-4" /> Submit
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="backdrop-blur-sm bg-black/30" />
        <DialogContent className="sm:max-w-[425px] backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle>Submit Portfolio</DialogTitle>
            <DialogDescription>
              Submit your portfolio to be featured on the homepage.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="owner">Name</Label>
                <Input
                  id="owner"
                  placeholder="John Doe"
                  value={formData.owner}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="url">Website URL</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://www.example.com"
                  value={formData.url}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="github">Github Repo</Label>
                <Input
                  id="github"
                  type="url"
                  placeholder="https://github.com/username/repo"
                  value={formData.github}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="technologies">Technologies</Label>
                <Input
                  id="technologies"
                  placeholder="React, Next.js, Tailwind CSS"
                  value={formData.technologies}
                  onChange={handleInputChange}
                />
                <span>
                  <small className="text-xs text-muted-foreground">
                    <span className="text-yellow-500">Note:</span> Technologies
                    must be separated by a comma.
                  </small>
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit Portfolio"}
              </Button>
              <DialogClose ref={closeDialogRef} className="hidden" />
            </div>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
