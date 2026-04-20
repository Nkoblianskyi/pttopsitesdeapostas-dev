import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph, PolicyList } from "@/components/policy-content"

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageLayout
      title="Política de Privacidade"
      lastUpdated="2026"
    >
      <PolicySection title="Introdução">
        <PolicyParagraph>
          Na pttopsitesdeapostas.com, respeitamos a sua privacidade e estamos empenhados em proteger os seus dados
          pessoais. Esta política de privacidade explica de que forma tratamos os seus dados quando visita o nosso site,
          quais os seus direitos ao abrigo da legislação aplicável e como pode exercê-los.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Dados que Recolhemos" delay={100}>
        <PolicyParagraph>
          Podemos recolher, utilizar, armazenar e transferir diferentes categorias de dados pessoais, nomeadamente:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Dados de Identidade: nome próprio, apelido ou identificador de utilizador.",
            "Dados de Contacto: endereço de email.",
            "Dados Técnicos: endereço IP, tipo e versão do navegador, fuso horário, sistema operativo e outras tecnologias usadas para aceder ao site.",
            "Dados de Utilização: informações sobre como navega no nosso site, produtos e serviços.",
            "Dados de Comunicação: preferências de marketing e comunicação.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Como Utilizamos os Seus Dados" delay={200}>
        <PolicyParagraph>
          Só processamos os seus dados pessoais quando a lei nos permite. As situações mais comuns incluem:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Quando é necessário para cumprir um contrato celebrado consigo.",
            "Quando é necessário para os nossos interesses legítimos, desde que esses interesses não se sobreponham aos seus direitos fundamentais.",
            "Quando somos obrigados por lei a fazê-lo.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Finalidades do Tratamento de Dados" delay={300}>
        <PolicyParagraph>
          Os seus dados pessoais podem ser utilizados para os seguintes fins:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Gerir a nossa relação consigo enquanto utilizador do site.",
            "Administrar e proteger o nosso site e negócio.",
            "Apresentar conteúdos e publicidade relevante para o seu perfil.",
            "Melhorar continuamente o nosso site, serviços e comunicações através da análise de dados.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Cookies" delay={400}>
        <PolicyParagraph>
          O seu navegador pode ser configurado para recusar todos ou alguns cookies, ou para alertá-lo sempre que um
          site definir ou aceder a um cookie. Se desativar ou recusar cookies, algumas secções do site podem não
          funcionar corretamente. Para mais informações, consulte a nossa Política de Cookies.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Segurança dos Dados" delay={500}>
        <PolicyParagraph>
          Implementámos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra perda
          acidental, acesso não autorizado, alteração ou divulgação. O acesso é restrito às pessoas que necessitam
          dessa informação para fins legítimos.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Conservação dos Dados" delay={600}>
        <PolicyParagraph>
          Conservamos os seus dados pessoais apenas pelo tempo estritamente necessário para cumprir as finalidades para
          as quais foram recolhidos, incluindo obrigações legais, contabilísticas ou de reporte.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Os Seus Direitos" delay={700}>
        <PolicyParagraph>
          Ao abrigo da legislação de proteção de dados aplicável, tem o direito de:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Aceder aos seus dados pessoais",
            "Solicitar a retificação dos seus dados",
            "Solicitar o apagamento dos seus dados",
            "Opor-se ao tratamento dos seus dados",
            "Solicitar a limitação do tratamento",
            "Solicitar a portabilidade dos seus dados",
            "Retirar o consentimento a qualquer momento",
          ]}
        />
      </PolicySection>

      <PolicySection title="Links para Sites de Terceiros" delay={800}>
        <PolicyParagraph>
          O nosso site pode conter links para sites de terceiros. Clicar nesses links pode permitir que terceiros
          recolham ou partilhem dados sobre si. Não controlamos esses sites e não somos responsáveis pelas respetivas
          políticas de privacidade.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Alterações à Política de Privacidade" delay={900}>
        <PolicyParagraph>
          Podemos atualizar esta política periodicamente. Quaisquer alterações serão publicadas nesta página com uma
          data de atualização revista. Recomendamos que verifique esta página regularmente para se manter informado.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Contacte-nos" delay={1000}>
        <PolicyParagraph>
          Se tiver dúvidas sobre esta política de privacidade ou sobre o tratamento dos seus dados, contacte-nos
          através de: privacidade@pttopsitesdeapostas.com
        </PolicyParagraph>
      </PolicySection>
    </PolicyPageLayout>
  )
}
