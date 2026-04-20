export function SportsVariety() {
  const sports = [
    { name: "Futebol", desc: "Primeira Liga, Champions League, Mundial" },
    { name: "Hóquei no Gelo", desc: "NHL, KHL, Campeonatos Europeus" },
    { name: "Fórmula 1", desc: "Grande Prémio, Qualificações, Corridas" },
    { name: "Dardos", desc: "PDC, Premier League, Campeonatos Mundiais" },
    { name: "Snooker", desc: "Bilhar, Pool, Campeonatos Mundiais" },
    { name: "Ténis", desc: "Grand Slams, ATP, WTA Tour" },
  ]

  return (
    <section className="py-8 md:py-12 bg-white border-b border-border">
      <div className="container mx-auto px-3 md:px-4 max-w-[1280px]">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold mb-3 text-foreground text-balance">
            Aposte nos Seus Desportos Favoritos
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Os melhores sites de apostas em Portugal oferecem uma vasta gama de modalidades desportivas. Desde o
            futebol até às competições de nicho, compare odds e mercados nas principais casas de apostas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {sports.map((sport) => (
            <div
              key={sport.name}
              className="border border-border p-4 text-center hover:border-[hsl(var(--porto-blue))] transition-colors"
            >
              <div className="w-8 h-1 bg-[hsl(var(--porto-blue))] mx-auto mb-3" />
              <h3 className="text-sm font-bold text-foreground mb-1">{sport.name}</h3>
              <p className="text-xs text-muted-foreground">{sport.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-5">
          E muito mais: Basquetebol, Voleibol, Andebol, MMA, Boxe, Ciclismo, Golfe, Rugby e dezenas de outras
          modalidades disponíveis nos melhores sites de apostas desportivas em Portugal.
        </p>
      </div>
    </section>
  )
}
