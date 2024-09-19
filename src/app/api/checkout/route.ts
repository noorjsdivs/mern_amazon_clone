import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { productType } from "../../../../type";

const stripe = new Stripe(process.env.STRIPE_SK!, {
  apiVersion: "2024-06-20",
});

export async function POST(request: NextRequest) {
  try {
    const { items, email } = await request.json();

    const contentLength = request.headers.get("content-length") || "0";
    if (parseInt(contentLength) === 0) {
      throw new Error("Request body is empty");
    }

    if (!items && !email) {
      throw new Error("First sign in and add cart items");
    }

    const extractedItems = items.map((item: productType) => ({
      price_data: {
        currency: "usd",

        unit_amount: Math.ceil(item?.price * 100),
        product_data: {
          name: item?.title,
          description: item?.description,
          images: item?.images,
        },
      },
      adjustable_quantity: {
        enabled: true,
        maximum: item?.stock,
        minimum: 1,
      },
      quantity: item?.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: extractedItems,
      mode: "payment",
      success_url: "http://localhost:3000/success?success=true",
      cancel_url: "http://localhost:3000/canceled?cencel=true",
      metadata: {
        email,
      },
    });

    return NextResponse.json({url: session?.url });
  } catch (error: any) {
    return NextResponse.json(
      { "error message": error.message},
      { status: 500 }
    );
  }
}
