import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Drawer } from "vaul";
import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useMediaQuery } from 'react-responsive'
import { useSignup } from "@/hooks/useSignup";

const signupSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  passwordConfirmation: z.string(),
}).refine((data) => data.password === data.passwordConfirmation, {
  path: ["passwordConfirmation"],
  message: "As senhas não são identicas",
})

type SignupFormDataSchema = z.infer<typeof signupSchema>;

type DialogFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function DrawerDialogDemo({ isOpen, onClose }: DialogFormProps) {

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-gray-600 text-center">Criar Conta</DialogTitle>
          </DialogHeader>
          <SignupForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer.Root open={isOpen} onOpenChange={handleOpenChange}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Criar Conta</DrawerTitle>
        </DrawerHeader>
        <SignupForm />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" size={"sm"} className="w-[100%] flex m-auto">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer.Root>
  );
}

export default function SignupForm() {
  const { loading, newSignup } = useSignup()

  const form = useForm<SignupFormDataSchema>({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(data: SignupFormDataSchema) {
    const url = await newSignup(data);
    if (url){
      window.location.href = url;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-white rounded-lg p-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-600">Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmação de Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirme a senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size={"sm"}
          className='bg-blue-500 hover:bg-blue-600 cursor-pointer w-[100%] flex m-auto'
          type="submit"
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </form>
    </Form>
  )
}