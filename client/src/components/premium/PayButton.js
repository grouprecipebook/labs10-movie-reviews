import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const PayButton = props => {
  const publishableKey = "pk_test_GAKbu7bXAJ5UZjNKNbWEe0XF";

  function onToken(token) {
  // Ontoken sends information about the card to Stripe.
  // Then it receives a token object that contains details about the transaction.
  //(card type, last 4 digits, email, ect)s, email, ect)
    console.log("token", token)
    const body = {
    // the body object contains our token from Stripe, 
    // the total amount of cents, and the props that specify 
    // the type of subscription, yearly or monthly
      amount: props.totalCents,
      token: token,
      plan: props.header,
  };

  // we send the body object to our backend with an axios request.
  // Our backend will then create a new customer and a new subscription
  axios
    .post("http://localhost:5000/api/payment", body)
    .then(response => {
      console.log("response", response);
    })
    .catch(error => {
      console.log("Payment Error: ", error);
    });
  };

  return (
    props.header === "Yearly Subscription" ? (
      <StripeCheckout
        label={"Pay Now"} //Component button text
        name={"Yearly Subscription"} //Modal Header
        description={"$9.99"}
        panelLabel="Submit Payment" //Submit button in modal
        amount={999} //Amount in cents 
        token={res => onToken(res)}
        stripeKey={publishableKey}
        // image="" //Pop-in header image
        billingAddress={false}
      />
    ) : (
      <StripeCheckout
        label={"Pay Now"} //Component button text
        name={"Monthly Subscription"} //Modal Header
        description={"$0.99"}
        panelLabel="Submit Payment" //Submit button in modal
        amount={99} //Amount in cents 
        token={res => onToken(res)} // onToken is invoked here
        stripeKey={publishableKey} 
        // image="" //Pop-in header image
        billingAddress={false}
      />
    )
  );
};

export default PayButton;