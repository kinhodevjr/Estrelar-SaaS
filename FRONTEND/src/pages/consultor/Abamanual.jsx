import "./AbaManual.css";
import { useState } from "react";

function AbaManual() {
  const [numeroSelecionado, setNumeroSelecionado] = useState("consultor-01");

  return (
    <div className="manual">

      <div className="manual-header">
        <div>
          <h1>Envio manual</h1>
          <p>Preencha os dados do lead, escolha um número conectado e revise a mensagem antes de enviar.</p>
        </div>
        <span className="manual-step">Individual</span>
      </div>

      <div className="card">
        <span className="card-label">Dados do lead</span>
        <div className="form-grid">
          <label className="field">
            <span>Celular</span>
            <input id="telefone" placeholder="21 988887777" />
            <span className="field-hint">DD + número</span>
            <span className="field-err"></span>
          </label>

          <label className="field">
            <span>Razão social</span>
            <input id="razao" placeholder="Ex.: Estrelar Consultoria LTDA" />
            <span className="field-err"></span>
          </label>

          <label className="field">
            <span>CNPJ</span>
            <input id="cnpj" placeholder="14 números" />
            <span className="field-err"></span>
          </label>
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <div>
            <span className="card-label">Números conectados</span>
            <p>Escolha de qual número a mensagem será disparada.</p>
          </div>
          <button className="btn-link" type="button">Gerenciar números</button>
        </div>

        <div className="numbers-grid">
          <label
            className={`number-card ${numeroSelecionado === "consultor-01" ? "selected" : ""}`}
          >
            <div className="number-meta">
              <div className="number-name">Consultor 01</div>
              <div className="number-phone">21 90000-0001</div>
            </div>
            <input
              type="radio"
              name="numero"
              checked={numeroSelecionado === "consultor-01"}
              onChange={() => setNumeroSelecionado("consultor-01")}
            />
          </label>

          <label
            className={`number-card ${numeroSelecionado === "consultor-02" ? "selected" : ""}`}
          >
            <div className="number-meta">
              <div className="number-name">Consultor 02</div>
              <div className="number-phone">21 90000-0002</div>
            </div>
            <input
              type="radio"
              name="numero"
              checked={numeroSelecionado === "consultor-02"}
              onChange={() => setNumeroSelecionado("consultor-02")}
            />
          </label>
        </div>

        {/* estado vazio (usar quando não houver números conectados) */}
        {/* <div className="empty-state">Nenhum número conectado no momento.</div> */}
      </div>

      <div className="two-col">
        <div className="card">
          <span className="card-label">Templates</span>
          <div className="tpl-row">
            <select>
              <option value="">— Selecionar template —</option>
            </select>
          </div>
          <div className="tpl-row">
            <button className="btn-link" type="button">Usar</button>
            <button className="btn-link" type="button">Excluir</button>
          </div>
          <div className="tpl-row">
            <input placeholder="Nome do template" />
            <button className="btn-link" type="button">Salvar</button>
          </div>
        </div>

        <div className="card">
          <span className="card-label">Mensagem</span>
          <textarea placeholder="Digite a mensagem..."></textarea>
          <div className="preview">A prévia da mensagem aparece aqui.</div>
        </div>
      </div>

      <div className="manual-footer">
        <button className="btn-primary" disabled>Enviar</button>
        <span className="status"></span>
      </div>

    </div>
  );
}

export default AbaManual; 