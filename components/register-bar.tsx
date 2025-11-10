import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function RegisterBar() {
  return (
    <div className="bg-ace-blue text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <span className="text-sm font-medium mr-4">
          Register Your Interest Here
        </span>
        <Button
          variant="outline"
          size="sm"
          className="bg-white text-ace-blue hover:bg-gray-100 border-white"
          asChild
        >
          <a href="#contact">
            <ExternalLink className="w-4 h-4 mr-2" />
            Register Now
          </a>
        </Button>
      </div>
    </div>
  );
}
