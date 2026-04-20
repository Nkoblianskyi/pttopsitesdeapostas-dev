export function CompareBonusTypes() {
  const bonusTypes = [
    {
      title: "Apostas Grátis",
      desc: "Receba apostas grátis após efetuar uma aposta qualificativa. Utilize-as para apostar sem arriscar o seu próprio dinheiro. Os ganhos gerados geralmente excluem o valor da aposta grátis em si.",
    },
    {
      title: "Bónus de Depósito",
      desc: "As casas de apostas igualam uma percentagem do seu primeiro depósito em fundos de bónus. Estes normalmente incluem requisitos de apostas que devem ser cumpridos antes de qualquer levantamento.",
    },
    {
      title: "Bónus Sem Depósito",
      desc: "Receba fundos de bónus ou apostas grátis simplesmente ao registar-se, sem necessidade de depósito inicial. Estes tendem a ter termos mais rigorosos, mas são totalmente isentos de risco.",
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-white border-b border-border">
      <div className="container mx-auto px-3 md:px-4 max-w-[1280px]">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-foreground text-balance">
            Compare Tipos de Bónus de Apostas
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
            Conheça os diferentes tipos de bónus disponíveis nas melhores casas de apostas em Portugal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bonusTypes.map((bonus, i) => (
            <div key={bonus.title} className="border border-border p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-[hsl(var(--porto-blue))]/20 leading-none">0{i + 1}</span>
                <div className="w-8 h-0.5 bg-[hsl(var(--porto-blue))]" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{bonus.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
