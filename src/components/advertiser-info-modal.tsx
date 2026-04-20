"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-[380px] sm:max-w-[430px] p-4 md:p-5">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-center text-lg md:text-xl">Informação Publicitária</DialogTitle>
          <DialogClose className="absolute right-3 top-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
        </DialogHeader>

        <div className="py-2 space-y-4">
          <div>
            <h3 className="font-semibold text-sm md:text-base mb-1.5">Informação Publicitária</h3>
            <div className="space-y-1.5">
              <p className="text-xs md:text-sm text-gray-700">
                pttopsitesdeapostas.com é um serviço gratuito para ajudá-lo a encontrar plataformas de apostas.
                Recebemos taxas de marcas em destaque, o que pode influenciar a sua colocação no ranking.
              </p>
              <p className="text-xs md:text-sm text-gray-700">
                Todos os sites em destaque são licenciados por autoridades respeitáveis. Esforçamo-nos pela precisão,
                mas não podemos ser responsabilizados por imprecisões.
              </p>
              <p className="text-xs md:text-sm text-gray-700">
                Bónus e ofertas estão sujeitos a alterações. Leia sempre os termos completos no site do operador antes
                de reivindicar.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm md:text-base mb-1.5">Restrição de Idade</h3>
            <div className="space-y-1.5">
              <p className="text-xs md:text-sm text-gray-700">
                Este site é para indivíduos com 18 anos ou mais. Ao usar o nosso site, confirma que cumpre este
                requisito.
              </p>
              <p className="text-xs md:text-sm text-gray-700">
                O jogo deve ser apenas para entretenimento. Nunca jogue com dinheiro que não pode perder.
              </p>
              <p className="text-xs md:text-sm text-gray-700">
                Se está a lutar com problemas de jogo, procure ajuda do SICAD ou outros serviços de apoio.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
