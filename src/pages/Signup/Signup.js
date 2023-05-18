import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../../redux/userSlice";
import { ButtonStyle, Container, InputStyle, SignupBox } from "./SignupStyles";

export default function Signup() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(changeUser(username));
    localStorage.setItem('username', username);
    navigate("/feed");
  }

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
          <button disabled={username === ''} onClick={handleClick}>ENTER</button>
        </ButtonStyle>
      </SignupBox>
    </Container>
  );
}
