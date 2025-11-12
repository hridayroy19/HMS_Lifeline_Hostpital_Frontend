/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import responser from "@/utils/helpers/responserData.json";
import deparment from "@/utils/helpers/departments.json";

//get all curiculam
export const getAllResponser = async () => {
    try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/curriculam`, {
        //     next: {
        //         tags: ["CURRICULAM"],
        //     },
        // });
        // return res.json();
        return responser
    } catch (error: any) {
        return Error(error);
    }
};

//get all curiculam
export const getAllDepartment = async () => {
    try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/curriculam`, {
        //     next: {
        //         tags: ["CURRICULAM"],
        //     },
        // });
        // return res.json();
        return deparment
    } catch (error: any) {
        return Error(error);
    }
};