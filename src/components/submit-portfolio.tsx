import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function SubmitPortfolio() {
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
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Submit your portfolio to be featured on the homepage.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="owner" className="text-right">
                Name
              </Label>
              <Input id="owner" placeholder="John Doe" className="col-span-3" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="url" className="text-right">
                Website URL
              </Label>
              <Input
                id="url"
                placeholder="https://www.example.com"
                className="col-span-3"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="github" className="text-right">
                Github Repo
              </Label>
              <Input
                id="github"
                placeholder="https://github.com/username/repo"
                className="col-span-3"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="technologies" className="text-right">
                Technologies
              </Label>
              <Input
                id="technologies"
                placeholder="React, Next.js, Tailwind CSS"
                className="col-span-3"
              />
              <span>
                <small className="text-xs text-muted-foreground">
                  <span className="text-yellow-500">Note:</span>
                  Technologies must be separated by a comma.
                </small>
              </span>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
