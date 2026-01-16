
"use client";

import { useParams } from "next/navigation";

export default function JobsAndCareer() {
    const params = useParams;
    console.log("params", params);
    return(
        <div>
            Jobs and Career
        </div>
    )
    
}