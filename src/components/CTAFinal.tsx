import React, { useState } from "react";
import { Icon } from "./Icon";
import { ShineBorder } from "./ShineBorder";

export const CTAFinal: React.FC = () => {
  const [form, setForm] = useState({
    nome: "",
    whats: "",
    cidade: "",
    tipo: "",
    msg: "",
  });
  const [errors, setErrors] = useState<Record<string, string | boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: false }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.nome.trim()) errs.nome = "Informe seu nome";
    if (!form.whats.trim() || form.whats.replace(/\D/g, "").length < 10)
      errs.whats = "WhatsApp inválido";
    if (!form.cidade.trim()) errs.cidade = "Informe sua cidade";
    if (!form.tipo) errs.tipo = "Selecione uma opção";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  const formatPhone = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  };

  return (
    <section className="section cta-final" id="contato">
      <div className="container">
        <div className="cta-grid">
          <div>
            <div className="urgency">
              <div className="pulse"></div>
              <div>
                <b>Agenda limitada:</b> a equipe técnica atende um número
                controlado de projetos por mês. Garanta sua posição.
              </div>
            </div>
            <span className="eyebrow">Próximo passo</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Seu negócio
              <br />
              <em>merece</em> ser visto.
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Você construiu algo com trabalho e dedicação. A fachada precisa
              refletir isso. O primeiro passo é gratuito e sem compromisso — nossa
              equipe responde em até 24 horas úteis.
            </p>

            <div style={{ marginTop: 36, display: "grid", gap: 14 }}>
              <div className="flex-row" style={{ color: "var(--ink-2)" }}>
                <Icon name="whats" />
                <span style={{ fontSize: 15 }}>
                  <b>WhatsApp:</b> (11) 99999-9999
                </span>
              </div>
              <div className="flex-row" style={{ color: "var(--ink-2)" }}>
                <Icon name="phone" />
                <span style={{ fontSize: 15 }}>
                  <b>Telefone:</b> (11) 4004-0000
                </span>
              </div>
              <div className="flex-row" style={{ color: "var(--ink-2)" }}>
                <Icon name="pin" />
                <span style={{ fontSize: 15 }}>
                  <b>Atendimento:</b> São Paulo e Região Metropolitana
                </span>
              </div>
            </div>
          </div>

          <ShineBorder
            borderRadius="22px"
            padding={2}
            block
            style={{ display: "block", width: "100%" }}
          >
            <div className="form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="ok-mark">
                    <Icon name="check" />
                  </div>
                  <h3 className="h-section" style={{ fontSize: 26 }}>
                    Pedido recebido.
                  </h3>
                  <p className="muted" style={{ marginTop: 10 }}>
                    Um especialista da Dalmonte entra em contato em até{" "}
                    <b>24 horas úteis</b> pelo WhatsApp informado.
                  </p>
                  <button
                    className="btn btn-ghost"
                    style={{ marginTop: 20 }}
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        nome: "",
                        whats: "",
                        cidade: "",
                        tipo: "",
                        msg: "",
                      });
                    }}
                  >
                    Enviar outro pedido
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="form-eyebrow">Orçamento gratuito · 24h</div>
                  <h3>Solicite seu orçamento</h3>
                  <p className="form-sub">
                    Preencha os campos abaixo. Sem compromisso.
                  </p>

                  <div className={`field ${errors.nome ? "error" : ""}`}>
                    <label>Nome completo</label>
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) => update("nome", e.target.value)}
                      placeholder="Seu nome"
                    />
                    <div className="err">{errors.nome}</div>
                  </div>

                  <div className="field-row">
                    <div className={`field ${errors.whats ? "error" : ""}`}>
                      <label>WhatsApp</label>
                      <input
                        type="tel"
                        value={form.whats}
                        onChange={(e) =>
                          update("whats", formatPhone(e.target.value))
                        }
                        placeholder="(00) 00000-0000"
                      />
                      <div className="err">{errors.whats}</div>
                    </div>
                    <div className={`field ${errors.cidade ? "error" : ""}`}>
                      <label>Cidade</label>
                      <input
                        type="text"
                        value={form.cidade}
                        onChange={(e) => update("cidade", e.target.value)}
                        placeholder="Sua cidade"
                      />
                      <div className="err">{errors.cidade}</div>
                    </div>
                  </div>

                  <div className={`field ${errors.tipo ? "error" : ""}`}>
                    <label>Tipo de fachada</label>
                    <select
                      value={form.tipo}
                      onChange={(e) => update("tipo", e.target.value)}
                    >
                      <option value="">Selecione</option>
                      <option value="acm">ACM</option>
                      <option value="letra-caixa">Letra Caixa</option>
                      <option value="ambos">ACM + Letra Caixa</option>
                      <option value="nao-sei">
                        Não tenho certeza — preciso de orientação
                      </option>
                    </select>
                    <div className="err">{errors.tipo}</div>
                  </div>

                  <div className="field">
                    <label>Conte um pouco sobre o projeto (opcional)</label>
                    <textarea
                      value={form.msg}
                      onChange={(e) => update("msg", e.target.value)}
                      placeholder="Tamanho aproximado, prazo desejado, observações…"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit">
                    Enviar pedido de orçamento
                    <span className="arrow">
                      <Icon name="arrow" />
                    </span>
                  </button>
                  <div className="legal">
                    Seus dados ficam só com a Dalmonte. Sem spam.
                  </div>
                </form>
              )}
            </div>
          </ShineBorder>
        </div>
      </div>
    </section>
  );
};
