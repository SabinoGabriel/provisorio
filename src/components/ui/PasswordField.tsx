import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./Button";
import { InputGroup, InputGroupAddon } from "./InputGroup";
import { Input } from "./Input";

function PasswordField(props: React.ComponentProps<typeof Input>) {
  const [show, setShow] = useState(false);

  return (
      <InputGroup className="h-fit">
        <Input type={show ? "text" : "password"} {...props} />
        <InputGroupAddon>
          <Button
            type="button"
            variant="ghost"
            className="hover:bg-[#f2f2f5] w-7 h-7"
            onClick={() => setShow((prev) => !prev)}
          >
            { show ? (
              <EyeOff className="opacity-50 cursor-pointer"/>
            ) : (
              <Eye className="opacity-50 cursor-pointer"/>
            )}
          </Button>
        </InputGroupAddon>
      </InputGroup>
  );
}

export { PasswordField }