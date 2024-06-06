import { ReactNode } from "react";
import { Slide } from "@/shared/types/slide.type";

export interface ModalProps {
  open: boolean;
  returnTo: Slide;
  content: ReactNode;
  confirmText: string;
  dismissText: string;
}
