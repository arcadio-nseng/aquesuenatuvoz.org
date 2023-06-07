'use client'

import SkeletonLoading from "@/components/SkeletonLoading";

export default function Loading() {

    return (
        <div className="container min-h-screen py-32 px-6 md:px-12">

            <SkeletonLoading/>
            <SkeletonLoading/>

        </div>
    )

}
