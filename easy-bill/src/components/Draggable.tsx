import { useDraggable, useDroppable } from "@dnd-kit/core";

export const Draggable = ({
    id,
    children,
  }: {
    id: string;
    children: React.ReactNode;
  }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
    const style = {
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
      cursor: "grab",
    };
  
    return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
      </div>
    );
  };
  
export  const Droppable = ({
    id,
    children,
  }: {
    id: string;
    children: React.ReactNode;
  }) => {
    const { setNodeRef } = useDroppable({ id });
    return (
      <div ref={setNodeRef} className="droppable">
        {children}
      </div>
    );
  };
  