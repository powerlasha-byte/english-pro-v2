import { ReactNode } from "react";
import { Button, Card } from "@/app/components/ui";

interface AuthFormProps {
  children: ReactNode;
  buttonText: string;
  loading?: boolean;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function AuthForm({
  children,
  buttonText,
  loading = false,
  onSubmit,
}: AuthFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <Card>
        {children}

        <Card.Footer>
          <Button
            fullWidth
            type="submit"
            loading={loading}
            rightIcon="→"
          >
            {buttonText}
          </Button>
        </Card.Footer>
      </Card>
    </form>
  );
}