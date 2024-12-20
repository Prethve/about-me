import connectDB from "@/config/database"
import Purchase from "@/models/Purchase";
import User from "@/models/User";

// GET /api/purchases
export const GET = async (request) => {
    try {
        await connectDB();

        const purchase = await Purchase.find({})

        return new Response(JSON.stringify(purchase), {status: 200});
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong...', {status: 404});
    }
}