import { Slide } from "@/shared/types/slide.type";

export interface ModalProps {
  open: boolean;
  returnTo: Slide;
  confirmText: string;
  dismissText: string;
}
