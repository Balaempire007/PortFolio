import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0",
        className
      )}
      {...props}
    />
  );
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent",
        className
      )}
      {...props}
    />
  );
});
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Close
      ref={ref}
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100",
        className
      )}
      {...props}
    >
      <X className="h-4 w-4" />
    </ToastPrimitives.Close>
  );
});
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Title
      ref={ref}
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  );
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
