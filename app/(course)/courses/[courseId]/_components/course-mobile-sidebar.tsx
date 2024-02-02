import { Menu } from "lucide-react";

import { Chapter, Course, UserProgress } from "@prisma/client";

import {
  Sheet,
  SheetTrigger,
  SheetContent
} from "@/components/ui/sheet";

import { CourseSidebar } from "./course-sidebar";

interface CourseMobileSidbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseMobileSidbar = ({
  course,
  progressCount
}: CourseMobileSidbarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent className="p-0 bg-white w-72" side="left">
        <CourseSidebar 
          course={course}
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  )
}