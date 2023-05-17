import { useState } from "react";
import { ButtonStyle, Container, InputStyle, SignupBox } from "./SignupStyles";

export default function Signup() {
  const [username, setUsername] = useState("");
  return (
    <Container>
      <SignupBox>
        <h1>Welcome to CodeLeap network!</h1>
        <InputStyle>
          <label>
            <p>Please enter your username</p>
            <input
              placeholder="John doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </InputStyle>
        <ButtonStyle isEmpty={username === ''} >
          <button disabled={username === ''}>ENTER</button>
        </ButtonStyle>
      </SignupBox>
    </Container>
  );
}
