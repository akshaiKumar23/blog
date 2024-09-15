"use server"

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
    const { isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    console.log(title);
    console.log(description);

    await prisma.post.create({
        data: {
            title,
            description,
        }
    })
    revalidatePath("/posts")
    redirect("/posts")
}