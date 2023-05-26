import {ReactNode} from "react";

export default function FancyBackground(props: {children: ReactNode}) {

    return (
        <div className="py-16 my-12 bg-primary/70 overflow-hidden fancy-background">
            {props.children}
        </div>
    )

}
