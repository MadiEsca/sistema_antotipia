import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o projeto",
  description:
    "",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
      {/* Header */}
      <div className="mb-16">
        <div className="font-mono text-[10px] text-da-accent tracking-[0.4em] uppercase mb-4">
          — Sobre o Projeto
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-da-text leading-tight mb-6">
          Nosso artigo.
        </h1>
        <div className="w-12 h-px bg-da-accent" aria-hidden="true" />
      </div>

      {/* Implementar uma API para o envio das perguntas e das respostas, de forma que o next apenas a consuma */}
      {/* Content */}
      <div className="space-y-12 text-da-muted text-[15px] leading-relaxed">
        <Section label="I. Resumo do Projeto">
          <p>
            Realizamos uma pesquisa sobre a história, os materiais, a prática e
            as aplicações da antotipia. Neste documento, explicamos como a
            antotipia transforma pigmentos vegetais e luz em imagens,
            apresentamos um roteiro de experimentação e reunimos fontes para
            consulta. Descobrimos que a técnica é acessível para projetos
            artísticos e escolares, mas produz imagens frágeis, que continuam
            mudando depois de prontas.
          </p>
        </Section>

        <Section label="II. Introdução">
          <p>
            Propusemos este projeto em sala de aula com o objetivo, em síntese,
            de criar fotografias de mulheres que desempenharam papéis
            fundamentais na história da ciência mundial. Mais do que homenagear
            suas contribuições científicas, buscamos reconhecer a importância
            dessas figuras em nossa formação e em nossa trajetória como alunos e
            alunas. Para isso, utilizamos a técnica da antotipia, um processo
            fotográfico alternativo que consiste na extração e utilização de
            pigmentos fotossensíveis, obtidos principalmente de fontes vegetais,
            como frutas, verduras e plantas, para a produção de imagens.
          </p>
          <p>
            Antotipia é um processo de impressão fotográfica no qual um extrato
            colorido de plantas é aplicado a um suporte, geralmente papel.
            Depois da secagem, folhas, objetos ou uma transparência fotográfica
            são colocados sobre a superfície. A exposição solar clareia as
            regiões descobertas e preserva mais cor nas regiões protegidas.
            Assim, a diferença de tonalidades forma a imagem. O nome
            anthotype, em inglês, remete a uma impressão de flores.
          </p>
          <p>
            Quando usamos objetos diretamente, o resultado é um fotograma: uma
            imagem produzida por contato, sem câmera. Também é possível
            reproduzir uma fotografia previamente feita, usando uma
            transparência positiva, que foi o caminho que escolhemos. As partes
            escuras da transparência barram a luz e permanecem mais coloridas
            na impressão.
          </p>
          <p>
            John Frederick William Herschel investigou a ação da luz sobre
            cores vegetais no século XIX. Seu artigo de 1842, publicado no
            volume 132 de Philosophical Transactions of the Royal Society of
            London, páginas 181–214, documenta experimentos com sucos de flores
            e folhas. O texto registra pesquisas anteriores e explica como o
            clima dificultava as exposições prolongadas. Por isso, entendemos
            1842 como um marco de publicação, não como o começo absoluto das
            observações.
          </p>
          <p>
            Mary Somerville também pesquisou os efeitos da luz sobre materiais
            vegetais e compartilhou resultados com Herschel. Reconhecer essa
            participação nos ajuda a compreender a técnica como parte de uma
            rede de investigação científica. A lentidão e a instabilidade
            dificultaram sua adoção comercial, mas artistas contemporâneos
            retomaram o processo.
          </p>
          <p>
            A fotodegradação é a alteração dos pigmentos pela ação da luz.
            Herschel observou que alguns extratos perdem quase toda a cor,
            enquanto outros deixam tonalidades residuais. A região iluminada nem
            sempre fica completamente branca. A resposta varia conforme o
            material e as condições de exposição. Aprendemos que não é correto
            reduzir todo o processo exclusivamente à radiação ultravioleta: o
            estudo de Herschel descreve ação importante da luz visível.
          </p>
        </Section>

        <Section label="III. Metodologia">
          <p>
            Inicialmente, selecionamos e trituramos os materiais vegetais para
            a extração dos pigmentos fotossensíveis. Após filtrar o extrato,
            aplicamos o líquido uniformemente sobre o papel, utilizando um
            pincel. Em seguida, deixamos o papel em um ambiente protegido da
            luz solar até sua completa secagem. Com o papel preparado,
            posicionamos sobre sua superfície as imagens das mulheres que
            escolhemos para o projeto, impressas em transparências. Fixamos o
            conjunto sob uma placa transparente e o expusemos à luz solar por
            determinado período, até que as imagens ficassem visíveis.
          </p>
          <ul className="space-y-4 list-none pl-0">
            <li>
              <strong className="text-white/90 font-medium">
                Preparar o extrato.
              </strong>{" "}
              Trituramos ou maceramos o vegetal. Acrescentamos apenas o líquido
              necessário para obter um extrato utilizável, porque a diluição
              excessiva reduz a intensidade da cor. Filtramos para retirar as
              partículas. A água funciona em algumas receitas; outras usam
              álcool para auxiliar a extração. Não existe uma proporção
              universal.
            </li>
            <li>
              <strong className="text-white/90 font-medium">
                Aplicar e secar.
              </strong>{" "}
              Espalhamos uma camada uniforme com pincel e deixamos secar
              protegido do sol. Quando aplicamos outra camada, esperamos a
              secagem da anterior. O guia de Mary Kocol utiliza duas ou três
              camadas; tratamos isso como exemplo de método, não como regra para
              todos os extratos.
            </li>
            <li>
              <strong className="text-white/90 font-medium">
                Montar a impressão.
              </strong>{" "}
              Colocamos o papel seco sobre uma base, posicionamos a folha e a
              transparência e pressionamos com a placa transparente, fixando com
              presilhas. O bom contato e a estabilidade favorecem contornos
              definidos.
            </li>
            <li>
              <strong className="text-white/90 font-medium">
                Expor e acompanhar.
              </strong>{" "}
              Deixamos o conjunto receber sol e acompanhamos o clareamento.
              Protegemos a montagem da chuva e do sereno. Evitamos deslocar o
              objeto ou abrir a montagem durante a formação da imagem, pois isso
              pode produzir contornos duplicados.
            </li>
            <li>
              <strong className="text-white/90 font-medium">
                Finalizar e registrar.
              </strong>{" "}
              Quando o contraste ficou satisfatório, retiramos o conjunto da luz
              e removemos a máscara. No procedimento básico, a imagem aparece
              durante a exposição: não depende de um revelador químico
              posterior. Fotografamos ou digitalizamos o resultado e guardamos o
              original protegido.
            </li>
          </ul>
        </Section>

        <Section label="IV. Resultados e Discussão">
          <p>
            Ao longo do procedimento, foi possível obter a extração de pigmentos naturais, que
            apresentaram uma coloração mais puxada para o tom dos pigmentos utilizados, como o
            alaranjado e arroxeado. Após a aplicação do extrato sobre o papel e sua secagem,
            observou-se a formação de uma superfície com tonalidade, nesse exemplo, arroxeada,
            apresentando algumas variações de intensidade e textura. Essas irregularidades
            evidenciam o caráter artesanal e experimental da técnica, na qual fatores como a
            distribuição do pigmento e sua concentração influenciam diretamente o resultado final. O
            procedimento permitiu compreender, na prática, como elementos naturais podem ser
            utilizados na produção de imagens por meio da ação da luz solar.
          </p>
        </Section>

        <Section label="V. Conclusão">
          <p>
            A antotipia aproxima fotografia, botânica e experimentação com a
            luz. Conhecer sua história, testar os pigmentos e documentar o
            processo nos permitiu utilizá-la em um trabalho escolar e
            artístico. Concluímos que sua principal condição de uso é aceitar a
            instabilidade do original e conservar um registro quando a
            permanência da imagem for necessária.
          </p>
          <p>
            A realização deste projeto nos proporcionou uma experiência de
            aprendizado que integrou arte, ciência e natureza, permitindo-nos
            compreender, na prática, os princípios e as possibilidades da
            técnica da antotipia como método alternativo de produção
            fotográfica. Ao longo do processo, a extração dos pigmentos
            vegetais, a preparação do papel e a exposição à luz solar nos
            mostraram como elementos naturais podem ser transformados em
            instrumentos de expressão artística. Além dos conhecimentos técnicos
            que adquirimos, o trabalho nos levou a refletir sobre a importância
            das mulheres na construção da história científica, reconhecendo suas
            descobertas, contribuições e o impacto de suas trajetórias na
            sociedade. Nossa homenagem também reforça a necessidade de dar
            visibilidade a figuras que, durante muito tempo, tiveram seu
            reconhecimento limitado.
          </p>
          <p>
            Por fim, concluímos que o projeto ultrapassou o caráter de uma
            simples atividade prática, tornando-se uma oportunidade de
            desenvolver nossa criatividade, estimular a experimentação e ampliar
            nosso conhecimento histórico e científico. Dessa maneira, a união
            entre a antotipia e a valorização da representatividade feminina
            nos permitiu transformar um processo artístico em uma forma de
            reconhecimento, memória e valorização do legado dessas mulheres.
          </p>
        </Section>

        <Section label="VI. Referências">
          <ul className="space-y-4 list-none pl-0">
            <li>
              <strong className="text-white/90 font-medium">
                Rhode Island Center for Photographic Arts.
              </strong>{" "}
              <a
                href="https://www.riphotocenter.org/anthotype-resources-for-making-pictures-from-plants/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                Anthotype Resources for Making Pictures from Plants
              </a>
              . Consultamos para o panorama histórico, a contribuição de Mary
              Somerville, o funcionamento e as exposições.
            </li>
            <li>
              <strong className="text-white/90 font-medium">
                Martin Helmut Reis — AlternativePhotography.com.
              </strong>{" "}
              <a
                href="https://www.alternativephotography.com/anthotype-process/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                The anthotype process
              </a>
              . Consultamos para o relato de prática sobre extração, aplicação,
              exposição e limites de fixação.
            </li>
            <li>
              <strong className="text-white/90 font-medium">
                John F W Herschel — Royal Society, 1842.
              </strong>{" "}
              <a
                href="https://www.jstor.org/stable/108152"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                On the Action of the Rays of the Solar Spectrum on Vegetable
                Colours and on Some New Photographic Processes
              </a>
              . Nossa fonte histórica primária. Philosophical Transactions, v.
              132, p. 181–214. DOI 10.1098/rstl.1842.0013.
            </li>
            <li>
              <strong className="text-white/90 font-medium">
                Malin Fabbri — AlternativePhotography.com.
              </strong>{" "}
              <a
                href="https://www.alternativephotography.com/the-chemistry-of-anthotypes/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                The chemistry of anthotypes
              </a>
              . Consultamos para a discussão do clareamento e de observações
              históricas. Para os dados bibliográficos de Herschel, priorizamos
              a fonte original.
            </li>
            <li>
              <strong className="text-white/90 font-medium">
                Eduardo Silveira e Marcel Piovezan, organizadores, 2021.
              </strong>{" "}
              <a
                href="https://editoracaseira.com/wp-content/uploads/2021/06/Desfazendo-invisiveis_um-passeio-pela-antotipia-e-fitotipia-Silveira_Eduardo-Pionezan_Marcel-org-web_compressed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                Desfazendo Invisíveis: um passeio pela antotipia e fitotipia
              </a>
              . Livro educativo em português, da Editora Caseira. Usamos para
              preparação, suporte, montagem e distinção entre técnicas.
            </li>
            <li>
              <strong className="text-white/90 font-medium">
                Eduardo Silveira, 2023.
              </strong>{" "}
              <a
                href="https://www.scielo.br/j/edreal/a/kx5rQLP75r5T4T33tgzRTsh/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                Encontros e Ficções: conversando com as plantas
              </a>
              . Artigo em Educação e Realidade. Nosso exemplo brasileiro de
              trabalho com estudantes do ensino médio técnico.
            </li>
          </ul>
        </Section>

        {/* Archive note */}
        <div className="border-t border-da-border pt-10 mt-10">
          <div className="mt-6 font-mono text-[10px] text-da-muted/50 tabular-nums">
            ANTOTIPIA / UM TRIBUTO A ELAS / BRASÍLIA, 05 NOV 2026
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="font-mono text-[10px] text-da-muted/60 tracking-widest uppercase mb-4 flex items-center gap-3">
        <span className="w-4 h-px bg-da-border" aria-hidden="true" />
        {label}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
