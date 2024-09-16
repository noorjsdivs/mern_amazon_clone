import Container from "@/Container/Container";
import React from "react";

const SuccessPage = () => {
  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen">
        <h3 className="text-xl font-semibold text-center">
          Congratulations, Order placed successfully.!
        </h3>
      </div>
    </Container>
  );
};

export default SuccessPage;
