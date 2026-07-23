import "./Painel_consultor.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AbaManual from "./Abamanual";

function Painel_consultor() {
  const { usuario } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("manual");

  return (
    <div className="consultor-container">
      
      <aside className="consultor-sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <h4 className="sidebar-logo-text">{usuario.usuario.split(".")[1]}</h4>
        </div>

        {/* Menu */}
        <nav className="sidebar-menu">
          <a
            onClick={() => setActiveTab("manual")}
            className={activeTab === "manual" ? "active" : ""}
          >
            Manual
          </a>
          <a
            onClick={() => setActiveTab("massa")}
            className={activeTab === "massa" ? "active" : ""}
          >
            Em massa
          </a>
          <a
            onClick={() => setActiveTab("conexao")}
            className={activeTab === "conexao" ? "active" : ""}
          >
            Conexão
          </a>
          <a
            onClick={() => setActiveTab("agendamentos")}
            className={activeTab === "agendamentos" ? "active" : ""}
          >
            Agendamentos
          </a>
        </nav>


      </aside>


      <main className="consultor-main">
        {/* Header */}
        <header className="consultor-header">
          <h1 className="header-title">
            {activeTab === "manual" && "Manual"}
            {activeTab === "massa" && "Em massa"}
            {activeTab === "conexao" && "Conexão"}
            {activeTab === "agendamentos" && "Agendamentos"}
          </h1>
        </header>

        {/* ABAS */}
        <div className="consultor-content">
          {activeTab === "manual" && (
            <section className="content-section">
              <AbaManual/>
            </section>
          )}

          {activeTab === "massa" && (
            <section className="content-section">
            </section>
          )}

          {activeTab === "conexao" && (
            <section className="content-section">
        
            </section>
          )}

          {activeTab === "agendamentos" && (
            <section className="content-section">
               <div className="em_desenvolvimento">
                <span className="em_des_badge">Em Desenvolvimento</span>
                <p className="em_des_desc"></p>
</div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Painel_consultor;