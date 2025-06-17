import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useMediaQuery } from "react-responsive";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { useState } from "react";

type DialogFormProps = {
  isOpen: boolean;
  onClose: () => void;
};


export function DrawerDialogUrl({ isOpen, onClose }: DialogFormProps) {
  const url = import.meta.env.VITE_BASE_URL;
  const shareLink = `${url}donation/userId`
  const [statusMsg, setStatusMsg] = useState<'success' | 'error' | null>(null);

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setStatusMsg('success')
      setTimeout(() => [onClose(), setStatusMsg(null)], 3000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
      setStatusMsg('error');
      setTimeout(() => [onClose(), setStatusMsg(null)], 3000);
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-gray-600 text-center">Seu Link de Doações</DialogTitle>
          </DialogHeader>

          <div className="flex items-center justify-between mt-4">
            <Input disabled type="email" value={shareLink} className="border mr-3" />
            <Button onClick={handleCopy} size={"icon"} className='bg-blue-500 hover:bg-blue-600 cursor-pointer'>
              <ContentCopyRoundedIcon fontSize="small" />
            </Button>
          </div>

          {statusMsg === 'success' && (
            <span className="text-sm text-green-500 mt-1">
              <CheckCircleOutlineRoundedIcon fontSize="small" className="mr-1" />
              Link copiado para a área de transferência!
            </span>
          )}

          {statusMsg === 'error' && (
            <span className="text-sm text-red-500 mt-1">
              <ErrorOutlineRoundedIcon fontSize="small" className="mr-1" />
              Error ao copiar link, tente novamente!
            </span>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={handleOpenChange}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Seu Link de Doações</DrawerTitle>
        </DrawerHeader>
        <div className="flex items-center justify-between mt-2 p-2">
          <Input disabled type="email" value={shareLink} className="border mr-3" />
          <Button onClick={handleCopy} size={"icon"} className='bg-blue-500 hover:bg-blue-600 cursor-pointer'>
            <ContentCopyRoundedIcon fontSize="small" />
          </Button>
        </div>

        {statusMsg === 'success' && (
          <span className="text-sm text-green-500 mt-1 p-2">
            <CheckCircleOutlineRoundedIcon fontSize="small" className="mr-1" />
            Link copiado para a área de transferência!
          </span>
        )}

        {statusMsg === 'error' && (
          <span className="text-sm text-red-500 mt-1">
            <ErrorOutlineRoundedIcon fontSize="small" className="mr-1" />
            Error ao copiar link, tente novamente!
          </span>
        )}

        <DrawerFooter className="pt-4">
          <DrawerClose asChild>
            <Button variant="outline" size={"sm"} className="w-[80%] flex m-auto">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}