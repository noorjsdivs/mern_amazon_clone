import { NextResponse, NextRequest } from "next/server";
import { ProductType } from "../../../../type";
import Stripe from "stripe";
export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const requestBody = await request.json();
    const { item, email } = await requestBody;
    const ModifiedProducts = await item?.map((item: ProductType) => ({
      quantity: item?.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item?.price * 100),
        product_data: {
          name: item?.title,
          description: item?.description,
          images: item?.images,
        },
      },
    }));
    // Stripe checkout instance
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: ModifiedProducts,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      metadata: {
        email,
      },
    });

    return NextResponse.json(
      {
        // status: 200,
        success: true,
        message: "Server is Connect",
        id: session?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
};
