/* ============================================================
   HOME PAGE — Tattoo Care Site
   Design: Dark Studio Aesthetic / Neo-Gothic Expressionism
   Colors: Background #06060e | Cyan #00d4e8 | Red #ff3030
   Fonts: Cinzel Decorative (display) | Cinzel (headers) | Raleway (body)
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import ParticleCanvas from "@/components/ParticleCanvas";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/FlbnhNhBZ5FrbHDpQpHmLB/sandbox/i9Vwo9K0N4orcG6JdEUEzZ-img-1_1771880620000_na1fn_dGF0dG9vLWhlcm8tYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRmxibmhOaEJaNUZyYkhEcFFwSG1MQi9zYW5kYm94L2k5VndvOUswTjRvcmNHNkpkRVVFelotaW1nLTFfMTc3MTg4MDYyMDAwMF9uYTFmbl9kR0YwZEc5dkxXaGxjbTh0WW1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uSzKXoXbUcqbEHXGYC-WZRX-n1iRsT~ISjAPFHHdLBBuARrmiLd3YAMcv8DjcJyfB8LJ39gqSltzKWNX~q2P9GwAyuko9pPPd8XfDUszgIKITwMg3UD0dPOuVXp~fckQPhuAW53NorjpD8HV6yDD6-v1nLC-EY6CQ8v8dw~y1pqpni8yCjEvLryyqOmOXXFEIaUEyV9429fSD4ybnFT4QuVQs6oY7NKr6t4KVInm4iE0lSDNa7YH8wbBhfDb2h3ekpB04WrhqEO1ERYGVoqcEX9pNriCEJrJN1RfNkk8HT-6skMSl-TF0hK-Z2Zrp~aS2MvO~uW5cEfETXEfsOE75A__";

const PRESESSION_BG = "https://private-us-east-1.manuscdn.com/sessionFile/FlbnhNhBZ5FrbHDpQpHmLB/sandbox/i9Vwo9K0N4orcG6JdEUEzZ-img-2_1771880618000_na1fn_dGF0dG9vLXByZXNlc3Npb24tYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRmxibmhOaEJaNUZyYkhEcFFwSG1MQi9zYW5kYm94L2k5VndvOUswTjRvcmNHNkpkRVVFelotaW1nLTJfMTc3MTg4MDYxODAwMF9uYTFmbl9kR0YwZEc5dkxYQnlaWE5sYzNOcGIyNHRZbWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cVhrqrBAPshTO75UVjtAZejLmJH2Nmpejc5imZto-xk-qFITez2Bidn8GxbQ1bqp2-eJDfLumAj7vP~p5z15LhnwctdJjnz~yqqyxKL2l6MTgYSs44ZzZZtFo1pGvOUVPo6KJRn4URDr0z2GgkKXPwRmjkVUBV16STW3eYLg0hwQgfaso~qu8ytjb-aJO8NsBrjp66ZcTmKgqh07qvfPI~f2QiM4Mpa2qk7DhFPcBzz7IO4kzjJFBZmhl7ZZX4jxvOc9hO4xciUxOvZ-UQ9H-Nw-IHFZHYNjVVTlnDLlUPbUk9ADPKhFud~UghWoE4f7jyNyZ4jju6WN0w6bhYzzhQ__";

const POSTSESSION_BG = "https://private-us-east-1.manuscdn.com/sessionFile/FlbnhNhBZ5FrbHDpQpHmLB/sandbox/i9Vwo9K0N4orcG6JdEUEzZ-img-3_1771880624000_na1fn_dGF0dG9vLXBvc3RzZXNzaW9uLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRmxibmhOaEJaNUZyYkhEcFFwSG1MQi9zYW5kYm94L2k5VndvOUswTjRvcmNHNkpkRVVFelotaW1nLTNfMTc3MTg4MDYyNDAwMF9uYTFmbl9kR0YwZEc5dkxYQnZjM1J6WlhOemFXOXVMV0puLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QOldhyVtXJlcdfL8a2he5LMyj4dHgQROn5Lw5ZSoFK3pN0zg8rru1jpwf2LA7dtpZuIvM4BXbZE5rcgmsIYE-yJsryo8VNczOEDJvFS0MQ3gowNY6t5mDy5PPWWJ2oCWGUk~1LoF4gP0jPwcSoZiaoT1OQ-FmTL9SR-RUqaiHAjCqb0zb66bufzi9etRJVJS4BVlOYEpfhvayz2GB5Woa6MMufilbhmVTyZpGNvMHoJ2RT2VSebIazuZrqpeq9o18QLtDK4r~G7WdUlIpkH67CUR3zpa3hGP~fOY57l-DIkJSvONveOlx4XvW7T0uTBaX0r3fLTFBMdH95d674KdHA__";

type TabType = "pre" | "pos";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("pre");
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  const addRevealRef = (el: HTMLElement | null, index: number) => {
    revealRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#06060e", color: "#ffffff" }}>
      {/* ── HERO SECTION ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,6,14,0.55) 0%, rgba(6,6,14,0.45) 60%, rgba(6,6,14,0.95) 100%)",
          }}
        />
        {/* Particle canvas */}
        <ParticleCanvas />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Logo / Brand name */}
          <div className="mb-6">
            {/* Typographic logo */}
            <div className="mb-5">
              <div
                className="text-xl md:text-2xl font-bold tracking-[0.15em] uppercase"
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  color: "#ffffff",
                  letterSpacing: "0.2em",
                }}
              >
                Alessandra Souza
              </div>
              <div
                className="text-xs tracking-[0.4em] uppercase mt-1"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "rgba(0,212,232,0.7)",
                }}
              >
                Tattoo Artist
              </div>
            </div>
            <div
              className="inline-block px-4 py-1 mb-2 text-xs tracking-[0.3em] uppercase"
              style={{
                color: "#00d4e8",
                border: "1px solid rgba(0,212,232,0.4)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              Guia Oficial
            </div>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#00d4e8",
              textShadow:
                "0 0 30px rgba(0,212,232,0.7), 0 0 60px rgba(0,212,232,0.3)",
            }}
          >
            Cuidados
            <br />
            <span style={{ color: "#ffffff", textShadow: "none" }}>
              Pós-Tattoo
            </span>
          </h1>

          <p
            className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: "rgba(255,255,255,0.75)",
              fontWeight: 300,
            }}
          >
            Este guia foi criado para te ajudar a cuidar da sua tatuagem da
            melhor forma possível — antes, durante e após a sessão.
          </p>

          {/* Tab switcher */}
          <div className="flex gap-0 justify-center flex-wrap mb-8">
            <button
              className={`tab-btn ${activeTab === "pre" ? "active" : ""}`}
              onClick={() => setActiveTab("pre")}
              style={{ borderRadius: "4px 0 0 4px" }}
            >
              Pré-Sessão
            </button>
            <button
              className={`tab-btn ${activeTab === "pos" ? "active" : ""}`}
              onClick={() => setActiveTab("pos")}
              style={{ borderRadius: "0 4px 4px 0" }}
            >
              Pós-Sessão
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#cuidados"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cuidados')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300"
              style={{
                fontFamily: "'Cinzel', serif",
                background: "linear-gradient(135deg, rgba(0,212,232,0.15), rgba(0,212,232,0.05))",
                border: "1px solid rgba(0,212,232,0.5)",
                color: "#00d4e8",
                borderRadius: "4px",
                boxShadow: "0 0 20px rgba(0,212,232,0.15)",
                letterSpacing: "0.2em",
              }}
            >
              Ver Guia Completo
            </a>
            <a
              href="https://wa.me/message/BA3DEYCCPMCHH1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300"
              style={{
                fontFamily: "'Cinzel', serif",
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.5)",
                color: "#25d366",
                borderRadius: "4px",
                letterSpacing: "0.15em",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(0,212,232,0.6)" }}
        >
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
            }}
          >
            ROLE PARA VER
          </span>
          <div
            className="w-px h-8"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,212,232,0.6), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── CONTENT SECTION ── */}
      <section
        id="cuidados"
        className="relative py-16 md:py-24"
        style={{ backgroundColor: "#06060e" }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${activeTab === "pre" ? PRESESSION_BG : POSTSESSION_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(6,6,14,0.85)" }}
        />

        <div className="container relative z-10 max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                color: "#00d4e8",
                textShadow: "0 0 25px rgba(0,212,232,0.5)",
              }}
            >
              {activeTab === "pre"
                ? "Cuidados Pré-Sessão"
                : "Cuidados Pós-Sessão"}
            </h2>
            <div className="divider-cyan max-w-xs mx-auto mb-4" />
            <p
              className="text-sm md:text-base max-w-2xl mx-auto"
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "rgba(255,255,255,0.6)",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              {activeTab === "pre"
                ? "ESTE TEXTO É PARA TE GUIAR, PARA QUE SUA TATUAGEM SAIA DA MELHOR FORMA NA SUA SESSÃO"
                : "ESTE TEXTO É PARA TE AJUDAR AGORA QUE A TATUAGEM ESTÁ FEITA! 50% DO SUCESSO DA TATUAGEM DEPENDE DE VOCÊ!"}
            </p>
          </div>

          {/* PRE-SESSION CONTENT */}
          {activeTab === "pre" && (
            <div className="space-y-6">
              {/* Alert card */}
              <div
                ref={(el) => addRevealRef(el, 0)}
                className="reveal card-alert rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="text-2xl flex-shrink-0"
                    style={{ color: "#ff3030" }}
                  >
                    ⚠
                  </div>
                  <div>
                    <h4
                      className="text-base font-bold mb-2 uppercase tracking-wider"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        color: "#ff3030",
                      }}
                    >
                      Importante
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      A região onde será feita a tatuagem{" "}
                      <strong style={{ color: "#ff3030" }}>
                        não deve receber
                      </strong>{" "}
                      os seguintes tratamentos:{" "}
                      <strong>
                        Depilação a laser ou cera, bronzeamento artificial.
                      </strong>
                    </p>
                    <p
                      className="text-xs mt-2"
                      style={{ color: "rgba(255,48,48,0.8)" }}
                    >
                      *No período de um mês antes a 6 meses depois da sessão.
                      Risco de queimaduras graves.
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              {[
                {
                  step: "01",
                  title: "Uma Semana Antes",
                  content:
                    "É super importante que você hidrate bem o local da tatuagem e beba bastante água nesse período! A pele bem hidratada facilita o processo de tatuagem e garante melhores resultados.",
                },
                {
                  step: "02",
                  title: "Um Dia Antes",
                  content: null,
                  items: [
                    "Evite ingestão de álcool e alimentos muito gordurosos.",
                    "Tenha em casa um produto para manter a tattoo hidratada durante a cicatrização, de preferência um próprio para tatuagem.",
                  ],
                  alert:
                    "NÃO RECOMENDO AS POMADAS BEPANTOL, BEPANTRIZ E MUITO MENOS NEBACETIN!!",
                },
                {
                  step: "03",
                  title: "No Dia da Tatuagem",
                  content: null,
                  items: [
                    "Não ingira álcool, alimentos muito gordurosos e drogas.",
                    "Vá bem alimentade para o estúdio com roupas confortáveis e acessíveis para a região a ser tatuada.",
                    "Se for uma tatuagem íntima, use biquíni ou uma blusa/saia que dê acesso à tattoo e você se sinta segura.",
                    "Evite roupas claras para que não haja manchas.",
                    "Se puder, NÃO traga acompanhantes. Em caso de tatuagem íntima, peça para alguém maior de 18 anos acompanhá-la.",
                    "Entenda que a sessão pode ser dolorida — farei o possível para você se sentir confortável.",
                  ],
                },
                {
                  step: "04",
                  title: "Lembrete Importante",
                  content:
                    "A tatuagem pode demorar desde o atendimento até o final do procedimento. Então, a data é um evento! Evite ter compromissos muito apertados no mesmo dia, para que nada seja feito às pressas. É muito importante não expor a tatuagem ao sol, piscina, mar, rio ou cachoeira por 30 dias — o protetor solar pode alterar a coloração do pigmento nesse período.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => addRevealRef(el, i + 1)}
                  className="reveal card-glow rounded-lg p-6"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="step-badge">{item.step}</div>
                    <div className="flex-1">
                      <h4
                        className="text-base md:text-lg font-semibold mb-3"
                        style={{
                          fontFamily: "'Cinzel', serif",
                          color: "#00d4e8",
                        }}
                      >
                        {item.title}
                      </h4>
                      {item.content && (
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            fontFamily: "'Raleway', sans-serif",
                            color: "rgba(255,255,255,0.8)",
                          }}
                        >
                          {item.content}
                        </p>
                      )}
                      {item.items && (
                        <ul className="space-y-2">
                          {item.items.map((li, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm"
                              style={{
                                fontFamily: "'Raleway', sans-serif",
                                color: "rgba(255,255,255,0.8)",
                              }}
                            >
                              <span
                                className="mt-1 flex-shrink-0"
                                style={{ color: "#00d4e8" }}
                              >
                                ◆
                              </span>
                              {li}
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.alert && (
                        <div
                          className="mt-3 p-3 rounded text-xs font-bold"
                          style={{
                            background: "rgba(255,48,48,0.1)",
                            border: "1px solid rgba(255,48,48,0.4)",
                            color: "#ff3030",
                            fontFamily: "'Cinzel', serif",
                            letterSpacing: "0.05em",
                          }}
                        >
                          ⚠ IMPORTANTE: {item.alert}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* POST-SESSION CONTENT */}
          {activeTab === "pos" && (
            <div className="space-y-6">
              {/* Alert banner */}
              <div
                ref={(el) => addRevealRef(el, 0)}
                className="reveal card-alert rounded-lg p-5 text-center"
              >
                <p
                  className="text-sm font-bold"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#ff3030",
                    letterSpacing: "0.05em",
                  }}
                >
                  ⚠ NEGLIGÊNCIA E MAU-CUIDADO PODEM ACARRETAR GRAVES
                  CONSEQUÊNCIAS NA SUA TATUAGEM E ORGANISMO
                </p>
              </div>

              {/* Steps */}
              {[
                {
                  step: "01",
                  title: "No Primeiro Dia",
                  content: null,
                  items: [
                    "Sua tatuagem é uma ferida aberta — trate-a com cuidado.",
                    "Caso tenha animais de estimação, use o plástico filme e não tire para dormir.",
                    "Troque o plástico de 3 a 4 vezes nas primeiras 24hrs.",
                    "Na hora da troca: lave com água morna ou fria com sabonete antisséptico ou neutro. Seque com batidas leves com papel toalha, aplique uma camada fina de hidratante neutro/pomada própria para tattoo e envolva com plástico filme novamente.",
                  ],
                },
                {
                  step: "02",
                  title: "Após Tirar o Plástico",
                  content: null,
                  items: [
                    "Lave ainda com sabonete antisséptico ou neutro e aplique uma camada fina de hidratante neutro ou pomada própria para tattoo, no mínimo uma vez ao dia.",
                    "Caso sinta necessidade, lave mais vezes.",
                    "O hidratante/pomada é apenas para hidratar as casquinhas e manter o pigmento — não há necessidade de passar muito.",
                  ],
                },
                {
                  step: "03",
                  title: "Durante Toda a Cicatrização",
                  content:
                    "Com uma boa alimentação e cuidados, seu corpo é capaz de realizar a cicatrização sozinho — só precisamos manter a região limpa e hidratada.",
                  items: [
                    "Evite sol por 30 dias",
                    "Não coce ou arranque as casquinhas",
                    "Evite alimentos muito gordurosos",
                    "Evite excesso de bebida alcoólica",
                    "Não vá à praia, piscina, rio ou cachoeira por 30 dias",
                    "Evite exercícios físicos intensos na primeira semana",
                    "Não passe protetor solar por 30 dias",
                    "Evite perfumes e outros hidratantes na área tatuada",
                    "Evite roupas e objetos na área tatuada — podem causar fricções",
                  ],
                },
                {
                  step: "04",
                  title: "Depois de Um Mês",
                  content:
                    "A partir de um mês, o uso do protetor solar sempre na área tatuada é essencial para manter o pigmento protegido. Mantenha sempre bem hidratada. Ela não deve tomar sol sem protetor solar para que dure mais tempo tão linda como saiu do estúdio. O hidratante pode ser de sua preferência.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => addRevealRef(el, i + 1)}
                  className="reveal card-glow rounded-lg p-6"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="step-badge">{item.step}</div>
                    <div className="flex-1">
                      <h4
                        className="text-base md:text-lg font-semibold mb-3"
                        style={{
                          fontFamily: "'Cinzel', serif",
                          color: "#00d4e8",
                        }}
                      >
                        {item.title}
                      </h4>
                      {item.content && (
                        <p
                          className="text-sm leading-relaxed mb-3"
                          style={{
                            fontFamily: "'Raleway', sans-serif",
                            color: "rgba(255,255,255,0.8)",
                          }}
                        >
                          {item.content}
                        </p>
                      )}
                      {item.items && (
                        <ul className="space-y-2">
                          {item.items.map((li, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm"
                              style={{
                                fontFamily: "'Raleway', sans-serif",
                                color: "rgba(255,255,255,0.8)",
                              }}
                            >
                              <span
                                className="mt-1 flex-shrink-0"
                                style={{ color: "#00d4e8" }}
                              >
                                ◆
                              </span>
                              {li}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Retoque section */}
              <div
                ref={(el) => addRevealRef(el, 5)}
                className="reveal card-glow rounded-lg p-6"
                style={{
                  border: "1px solid rgba(0,212,232,0.4)",
                  background: "rgba(0,212,232,0.05)",
                }}
              >
                <h4
                  className="text-lg font-bold mb-4 text-center"
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    color: "#00d4e8",
                    textShadow: "0 0 15px rgba(0,212,232,0.4)",
                  }}
                >
                  Retoque
                </h4>
                <div className="divider-cyan mb-4" />
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Quando se trabalha com tatuagem, é importante ter consciência
                  de que a tatuagem não ficará totalmente igual como quando acaba
                  de sair do estúdio.{" "}
                  <strong style={{ color: "#00d4e8" }}>
                    Em caso de erro da tatuadora, o retoque é grátis.
                  </strong>{" "}
                  Porém, caso seja por mau cuidado, o valor do retoque é a
                  partir de{" "}
                  <strong style={{ color: "#00d4e8" }}>R$190,00</strong>. Não
                  será cobrado o valor do retoque, também, caso haja uma outra
                  tatuagem a ser feita — desde que seja avisado deste retoque já
                  no dia do agendamento online.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── QUICK REFERENCE SECTION ── */}
      <section
        className="py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, #06060e 0%, #0a0a18 50%, #06060e 100%)",
        }}
      >
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                color: "#00d4e8",
                textShadow: "0 0 20px rgba(0,212,232,0.4)",
              }}
            >
              Regras de Ouro
            </h2>
            <div className="divider-cyan max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "☀️",
                title: "Sem Sol",
                desc: "Evite exposição solar por 30 dias",
              },
              {
                icon: "🏊",
                title: "Sem Água",
                desc: "Nada de praia, piscina, rio ou cachoeira por 30 dias",
              },
              {
                icon: "🧴",
                title: "Hidrate",
                desc: "Mantenha a área sempre hidratada com produto adequado",
              },
              {
                icon: "🚫",
                title: "Não Coce",
                desc: "Nunca arranque ou coce as casquinhas",
              },
              {
                icon: "🍷",
                title: "Sem Álcool",
                desc: "Evite bebidas alcoólicas durante a cicatrização",
              },
              {
                icon: "🦋",
                title: "Cuide-se",
                desc: "50% do sucesso da sua tattoo depende dos seus cuidados",
              },
            ].map((rule, i) => (
              <div
                key={i}
                className="card-glow rounded-lg p-5 text-center"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="text-3xl mb-3">{rule.icon}</div>
                <h5
                  className="text-sm font-bold mb-2 uppercase tracking-wider"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#00d4e8",
                  }}
                >
                  {rule.title}
                </h5>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-14 text-center"
        style={{
          borderTop: "1px solid rgba(0,212,232,0.15)",
          background: "#06060e",
        }}
      >
        <div className="container max-w-2xl mx-auto">
          {/* Brand */}
          <div
            className="text-xl md:text-2xl font-bold mb-1"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#ffffff",
              letterSpacing: "0.15em",
            }}
          >
            Alessandra Souza
          </div>
          <div
            className="text-xs tracking-[0.4em] uppercase mb-6"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "rgba(0,212,232,0.7)",
            }}
          >
            Tattoo Artist
          </div>

          <div className="divider-cyan max-w-xs mx-auto mb-8" />

          {/* Social Links */}
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/message/BA3DEYCCPMCHH1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
              style={{
                fontFamily: "'Cinzel', serif",
                background: "rgba(37,211,102,0.1)",
                border: "1px solid rgba(37,211,102,0.4)",
                color: "#25d366",
                borderRadius: "4px",
                letterSpacing: "0.15em",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar via WhatsApp
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/alessinktatto?igsh=MWtjaTI0ZmM3YnNzeQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
              style={{
                fontFamily: "'Cinzel', serif",
                background: "rgba(225,48,108,0.1)",
                border: "1px solid rgba(225,48,108,0.4)",
                color: "#e1306c",
                borderRadius: "4px",
                letterSpacing: "0.15em",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @alessinktatto
            </a>
          </div>

          <p
            className="text-xs"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            Siga todas as orientações para garantir a melhor cicatrização e
            durabilidade da sua tatuagem. &copy; {new Date().getFullYear()} Alessandra Souza Tattoo
          </p>
        </div>
      </footer>
      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href="https://wa.me/message/BA3DEYCCPMCHH1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
        style={{
          background: "#25d366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5), 0 0 0 0 rgba(37,211,102,0.4)",
          animation: "pulse-whatsapp 2s infinite",
        }}
        title="Agendar via WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @keyframes pulse-whatsapp {
          0% { box-shadow: 0 4px 20px rgba(37,211,102,0.5), 0 0 0 0 rgba(37,211,102,0.4); }
          70% { box-shadow: 0 4px 20px rgba(37,211,102,0.5), 0 0 0 12px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5), 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </div>
  );
}
