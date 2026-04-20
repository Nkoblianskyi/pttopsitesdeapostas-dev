export function RatingMethodology() {
  const sports = [
    {
      title: "Futebol",
      desc: "Apostas na Primeira Liga, Champions League, Premier League e todos os principais campeonatos mundiais. Mercados ao vivo, apostas combinadas e odds competitivas para cada jogo.",
    },
    {
      title: "Ténis",
      desc: "Cobertura completa de Grand Slams, ATP e WTA. Apostas em sets, games e pontos específicos. Streaming ao vivo disponível nas melhores plataformas para seguir cada partida.",
    },
    {
      title: "Basquetebol",
      desc: "NBA, Euroliga e campeonatos nacionais. Apostas em handicaps, totais de pontos e desempenho individual. Estatísticas detalhadas para apostas informadas.",
    },
    {
      title: "Desportos Motorizados",
      desc: "Fórmula 1, MotoGP e outras competições automobilísticas. Apostas em vencedores de corridas, pole positions e pódios. Mercados especiais para o campeonato completo.",
    },
    {
      title: "Desportos de Combate",
      desc: "UFC, Boxe e outras artes marciais. Apostas em métodos de vitória, rounds e lutas completas. Análises detalhadas de atletas para maximizar as suas oportunidades.",
    },
    {
      title: "Outros Desportos",
      desc: "Hóquei no gelo, voleibol, andebol, ciclismo e muito mais. Cobertura abrangente de eventos internacionais e nacionais com odds competitivas em todos os mercados.",
    },
  ]

  const criteria = [
    {
      title: "Variedade de Mercados",
      desc: "Avaliamos a amplitude de desportos disponíveis, desde futebol e ténis até modalidades de nicho. Analisamos o número de ligas cobertas e os tipos de apostas disponíveis.",
    },
    {
      title: "Competitividade das Odds",
      desc: "Comparamos as odds em eventos principais e secundários. Plataformas com margens mais baixas e odds mais generosas recebem pontuações superiores.",
    },
    {
      title: "Funcionalidades e Usabilidade",
      desc: "Testamos apostas ao vivo, cash out, streaming de eventos, aplicações móveis e velocidade. A facilidade de navegação e a qualidade da experiência são determinantes.",
    },
    {
      title: "Bónus e Promoções",
      desc: "Analisamos bónus de boas-vindas, promoções regulares e programas de fidelidade. Avaliamos os requisitos de apostas e a transparência dos termos apresentados.",
    },
    {
      title: "Segurança e Suporte",
      desc: "Verificamos o licenciamento legal em Portugal, métodos de pagamento seguros, velocidade de levantamentos e qualidade do apoio ao cliente disponível.",
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-[hsl(var(--muted))] border-y border-border">
      <div className="container mx-auto px-3 md:px-4 max-w-[1280px]">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold mb-3 text-foreground text-balance">
            Apostas Desportivas em Portugal
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra as melhores casas de apostas para todos os tipos de desportos. Comparamos odds, mercados e
            funcionalidades para o ajudar a encontrar a plataforma ideal para as suas apostas.
          </p>
        </div>

        {/* Sports grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {sports.map((sport) => (
            <div key={sport.title} className="bg-white border border-border p-5">
              <div className="w-6 h-0.5 bg-[hsl(var(--porto-blue))] mb-3" />
              <h3 className="text-sm md:text-base font-bold text-foreground mb-2">{sport.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{sport.desc}</p>
            </div>
          ))}
        </div>

        {/* Scoring system */}
        <div className="bg-white border border-border p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Sistema de Pontuação</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Cada plataforma é testada e pontuada numa escala de 0 a 10, considerando a experiência real dos apostadores
            portugueses e a qualidade dos serviços oferecidos.
          </p>

          <div className="space-y-3 mb-6">
            {criteria.map((c) => (
              <div key={c.title} className="border-l-2 border-[hsl(var(--porto-blue))] pl-4 py-2">
                <h4 className="text-sm font-bold text-foreground mb-1">{c.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border-t border-border pt-6">
            <div className="border border-[hsl(var(--porto-blue))] p-4">
              <div className="text-2xl font-bold text-[hsl(var(--porto-blue))] mb-1">9.0 - 10.0</div>
              <div className="text-sm font-bold text-foreground mb-1">Excelência</div>
              <div className="text-xs text-muted-foreground">Plataformas premium com serviço superior em todas as categorias</div>
            </div>
            <div className="border border-border p-4">
              <div className="text-2xl font-bold text-amber-500 mb-1">7.5 - 8.9</div>
              <div className="text-sm font-bold text-foreground mb-1">Muito Bom</div>
              <div className="text-xs text-muted-foreground">Casas de apostas confiáveis com excelente qualidade geral</div>
            </div>
            <div className="border border-border p-4">
              <div className="text-2xl font-bold text-muted-foreground mb-1">6.0 - 7.4</div>
              <div className="text-sm font-bold text-foreground mb-1">Bom</div>
              <div className="text-xs text-muted-foreground">Opções sólidas para apostadores com necessidades específicas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
