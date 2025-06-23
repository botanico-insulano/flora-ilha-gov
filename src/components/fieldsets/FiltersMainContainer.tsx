import QueryProvider from "../contexts/QueryContext";
import { useEffect, useRef } from "react";
import "../fieldsets/styles.scss";
export default function FiltersMainContainer() {
  const mr = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!mr.current) return;
    for (const ip of [
      ...Array.from(mr.current.querySelectorAll("textarea")),
      ...Array.from(mr.current.querySelectorAll("input")),
    ]) {
      if (["checkbox", "radio"].includes(ip.type))
        ip.classList.add("form-check-input");
      else ip.classList.add("form-control");
    }
    for (const sl of mr.current.querySelectorAll("select"))
      sl.classList.add("form-select");
  }, []);
  return (
    <QueryProvider>
      <section id="filtersMainContainerSect" ref={mr}>
        <fieldset className="main-queries-fs">
          <fieldset className="query-fs">
            <label>Nome</label>
            <input type="text"></input>
          </fieldset>
          <fieldset className="query-fs">
            <label>Rank</label>
            <input type="text"></input>
          </fieldset>
          <fieldset className="query-fs">
            <label>Localização</label>
            <input type="text"></input>
          </fieldset>
        </fieldset>
        <aside className="p-2 mx-auto me-lg-2 svelte-munhvf">
          <form
            className="rounded px-4 mx-lg-0 svelte-munhvf"
            method="GET"
            autoComplete="off"
          >
            <header
              className="p-2 text-end"
              style={{ borderBottom: "1px solid rgb(200, 222, 193)" }}
            >
              <button
                type="reset"
                className="btn text-decoration-none text-uppercase text-white shadow-inset me-2 svelte-1kg46cs"
                style={{ fontSize: "small" }}
              >
                Clear filters
              </button>
              <button
                type="submit"
                className="btn text-decoration-none text-uppercase text-white shadow-inset svelte-1kg46cs"
                style={{ fontSize: "small" }}
              >
                Search
              </button>
            </header>

            <fieldset className="row svelte-munhvf">
              <legend className="border-bottom border-dark svelte-munhvf">
                Name
              </legend>
              <div className="col-sm-6">
                <label htmlFor="grupo" className="form-label">
                  Groups
                </label>
                <select
                  id="grupo"
                  name="grupo"
                  className="form-select"
                  style={{ fontSize: "small" }}
                >
                  <option value="6">Flora e Funga</option>
                  <option value="2">Algae</option>
                  <option value="5">Angiosperms</option>
                  <option value="4">Bryophytes</option>
                  <option value="9">Hornworts</option>
                  <option value="8">Liverworts</option>
                  <option value="7">Mosses</option>
                  <option value="1">Fungi</option>
                  <option value="10">lato-sensu</option>
                  <option value="11">stricto-sensu</option>
                  <option value="3">Gymnosperms</option>
                  <option value="12">Ferns and Lycophytes</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label htmlFor="familia" className="form-label">
                  Family
                </label>
                <select
                  id="familia"
                  name="familia"
                  className="form-select"
                  style={{ fontSize: "small" }}
                >
                  <option value="null">all</option>
                  {/* Other options truncated for brevity */}
                </select>
              </div>
              <div className="col-sm-6">
                <label htmlFor="genero" className="form-label svelte-munhvf">
                  Genus
                </label>
                <input
                  id="genero"
                  name="genero"
                  type="text"
                  className="form-control svelte-m11mzo"
                  style={{ fontSize: "small" }}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="especie" className="form-label svelte-munhvf">
                  Species
                </label>
                <input
                  id="especie"
                  name="especie"
                  type="text"
                  className="form-control svelte-m11mzo"
                  style={{ fontSize: "small" }}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="autor" className="form-label svelte-munhvf">
                  Author
                </label>
                <input
                  id="autor"
                  name="autor"
                  type="text"
                  className="form-control svelte-m11mzo"
                  style={{
                    fontSize: "small",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                />
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="nome-popular"
                  className="form-label svelte-munhvf"
                >
                  Vernacular name
                </label>
                <input
                  id="nome-popular"
                  name="nomeVernaculo"
                  type="text"
                  className="form-control svelte-m11mzo"
                  style={{ fontSize: "small" }}
                />
              </div>
              <div className="col-sm-12">
                <label
                  htmlFor="nome-completo"
                  className="form-label svelte-munhvf"
                >
                  Full Name
                  <div
                    style={{ position: "relative", top: "2px" }}
                    className="svelte-6o4qkf"
                  >
                    <button
                      type="button"
                      className="ModalButton m-0 p-0 svelte-6o4qkf"
                    />
                  </div>
                </label>
                <input
                  id="nome-completo"
                  name="nomeCompleto"
                  type="text"
                  className="form-control svelte-m11mzo"
                  style={{ fontSize: "small" }}
                />
              </div>
            </fieldset>

            <fieldset className="row svelte-munhvf">
              <fieldset className="col-sm-6 svelte-munhvf">
                <legend className="border-bottom border-dark svelte-munhvf">
                  Description
                </legend>
                <input
                  id="apenas-taxons-com-descricao"
                  name="apenasTaxonDescricao"
                  type="checkbox"
                  className="form-check-input"
                />
                <label
                  htmlFor="apenas-taxons-com-descricao"
                  className="d-inline form-check-label svelte-munhvf"
                >
                  Only taxa with description
                </label>
              </fieldset>
              <fieldset className="col-sm-6 svelte-munhvf">
                <legend className="border-bottom border-dark svelte-munhvf">
                  Images
                </legend>
                <input
                  id="somente-com-imagens"
                  name="somenteImagens"
                  type="checkbox"
                  className="form-check-input"
                />
                <label
                  htmlFor="somente-com-imagens"
                  className="form-check-label svelte-munhvf"
                >
                  Having Images
                </label>
              </fieldset>
            </fieldset>

            <fieldset className="row svelte-munhvf">
              <legend className="border-bottom border-dark svelte-munhvf">
                Life Form and Substrate
              </legend>
              <div className="col-sm-6">
                <label
                  htmlFor="forma-de-vida"
                  className="form-label svelte-munhvf"
                >
                  Life Form
                </label>
                <select
                  id="forma-de-vida"
                  name="formaVida"
                  className="form-select"
                  style={{ fontSize: "small" }}
                >
                  <option value="null">all</option>
                  <option value="17">Aquatic-Benthos</option>
                  <option value="15">Aquatic-Neuston</option>
                  <option value="16">Aquatic-Plankton</option>
                  <option value="14">Bamboo</option>
                  <option value="5">Cushion</option>
                  <option value="6">Dendroid</option>
                  <option value="21">Dracaenoid</option>
                  <option value="26">Endophyte</option>
                  <option value="27">Entomogenous</option>
                  <option value="7">Flabellate</option>
                  <option value="22">foliose</option>
                  <option value="1">Herb</option>
                  <option value="4">Liana/scandent/vine</option>
                  <option value="28">Lichenized</option>
                  <option value="10">Mat</option>
                  <option value="29">Mycorrhizal</option>
                  <option value="24">Palm Tree</option>
                  <option value="19">Parasite</option>
                  <option value="8">Pendent</option>
                  <option value="18">Saprobe</option>
                  <option value="2">Shrub</option>
                  <option value="13">Subshrub</option>
                  <option value="25">Succulent</option>
                  <option value="9">Thallose</option>
                  <option value="3">Tree</option>
                  <option value="11">Tuft</option>
                  <option value="12">Weft</option>
                  <option value="23">Unknown</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label htmlFor="substrato" className="form-label svelte-munhvf">
                  Substrate
                </label>
                <select
                  id="forma-de-vida"
                  name="formaVida"
                  className="form-select"
                  style={{ fontSize: "small" }}
                >
                  <option value="null">all</option>
                  <option value="17">Aquatic-Benthos</option>
                  <option value="15">Aquatic-Neuston</option>
                  <option value="16">Aquatic-Plankton</option>
                  <option value="14">Bamboo</option>
                  <option value="5">Cushion</option>
                  <option value="6">Dendroid</option>
                  <option value="21">Dracaenoid</option>
                  <option value="26">Endophyte</option>
                  <option value="27">Entomogenous</option>
                  <option value="7">Flabellate</option>
                  <option value="22">foliose</option>
                  <option value="1">Herb</option>
                  <option value="4">Liana/scandent/vine</option>
                  <option value="28">Lichenized</option>
                  <option value="10">Mat</option>
                  <option value="29">Mycorrhizal</option>
                  <option value="24">Palm Tree</option>
                  <option value="19">Parasite</option>
                  <option value="8">Pendent</option>
                  <option value="18">Saprobe</option>
                  <option value="2">Shrub</option>
                  <option value="13">Subshrub</option>
                  <option value="25">Succulent</option>
                  <option value="9">Thallose</option>
                  <option value="3">Tree</option>
                  <option value="11">Tuft</option>
                  <option value="12">Weft</option>
                  <option value="23">Unknown</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="row svelte-munhvf">
              <legend className="border-bottom border-dark svelte-munhvf">
                Geographic Distribution
              </legend>
              <fieldset className="col-sm-6 svelte-munhvf">
                <legend className="border-bottom border-dark svelte-munhvf">
                  Occurs in Brazil
                  <div className="svelte-6o4qkf">
                    <button
                      type="button"
                      className="ModalButton m-0 p-0 svelte-6o4qkf"
                    />
                  </div>
                </legend>
                <select
                  id="ocorre-no-brasil"
                  name="ocorreBrasil"
                  className="form-select svelte-munhvf"
                >
                  <option value="QUALQUER">any</option>
                  <option value="SIM">Yes</option>
                  <option value="NAO">No</option>
                  <option value="DESCONHECIDO">Unknown</option>
                </select>
              </fieldset>
              <fieldset className="col-sm-6 svelte-munhvf">
                <legend className="border-bottom border-dark svelte-munhvf">
                  Occurrence
                </legend>
                <select
                  id="ocorrencia"
                  name="ocorrencia"
                  className="form-select svelte-munhvf"
                >
                  <option value="OCORRE">occurs in</option>
                  <option value="SOMENTE_OCORRE">only occurs in</option>
                </select>
              </fieldset>
              <fieldset className="col-sm-6 svelte-munhvf">
                <legend className="border-bottom border-dark svelte-munhvf">
                  Endemism
                  <div className="svelte-6o4qkf">
                    <button
                      type="button"
                      className="ModalButton m-0 p-0 svelte-6o4qkf"
                    />
                  </div>
                </legend>
                <select
                  id="endemismo"
                  name="endemismo"
                  className="form-select svelte-munhvf"
                >
                  <option value="TODOS">all</option>
                  <option value="ENDEMICA_BRASIL">
                    only endemic to Brazil
                  </option>
                  <option value="NAO_ENDEMICA_BRASIL">
                    only not endemic to Brazil
                  </option>
                </select>
              </fieldset>
              <fieldset className="col-sm-6 svelte-munhvf">
                <legend className="border-bottom border-dark svelte-munhvf">
                  Origin
                  <div className="svelte-6o4qkf">
                    <button
                      type="button"
                      className="ModalButton m-0 p-0 svelte-6o4qkf"
                    />
                  </div>
                </legend>
                <select
                  id="origem"
                  name="origem"
                  className="form-select svelte-munhvf"
                >
                  <option value="TODOS">all</option>
                  <option value="CULTIVADA">Cultivated</option>
                  <option value="NATIVA">Native</option>
                  <option value="NATURALIZADA">Naturalized</option>
                </select>
              </fieldset>
              <fieldset className="row svelte-munhvf">
                <legend className="border-bottom border-dark svelte-munhvf">
                  Distribution
                </legend>
                <div className="col-sm-6">
                  <label htmlFor="regiao" className="form-label svelte-munhvf">
                    Region
                  </label>
                  <select
                    id="regiao"
                    name="regiao"
                    className="form-select svelte-munhvf"
                  >
                    <option value="QUALQUER">any</option>
                    <option value="CENTRO_OESTE">Central-west</option>
                    <option value="NORDESTE">Northeast</option>
                    <option value="NORTE">North</option>
                    <option value="SUDESTE">Southeast</option>
                    <option value="SUL">South</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label
                    htmlFor="restringir-as-ilhas-oceanicas"
                    className="text-nowrap form-label svelte-munhvf"
                  >
                    Restricted to oceanic islands
                  </label>
                  <select
                    id="restringir-as-ilhas-oceanicas"
                    name="ilhaOceanica"
                    className="form-select svelte-munhvf"
                  >
                    <option value="32767">Not restrict</option>
                    <option value="ABROLHO">Abrolhos</option>
                    <option value="ATOL_DAS_ROCAS">Atol das Rocas</option>
                    <option value="FERNANDO_NORONHA">
                      Fernando de Noronha
                    </option>
                    <option value="SAO_PEDRO_SAO_PAULO">
                      São Pedro e São Paulo
                    </option>
                    <option value="TRINDADE">Trindade</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="estado" className="form-label svelte-munhvf">
                    State
                  </label>
                  <select
                    id="estado"
                    name="estado"
                    className="form-select svelte-munhvf"
                  >
                    <option value="QUALQUER">any</option>
                    <option value="AC">Acre - AC</option>
                    <option value="AL">Alagoas - AL</option>
                    <option value="AP">Amapá - AP</option>
                    <option value="AM">Amazonas - AM</option>
                    <option value="BA">Bahia - BA</option>
                    <option value="CE">Ceará - CE</option>
                    <option value="DF">Distrito Federal - DF</option>
                    <option value="ES">Espírito Santo - ES</option>
                    <option value="GO">Goiás - GO</option>
                    <option value="MA">Maranhão - MA</option>
                    <option value="MT">Mato Grosso - MT</option>
                    <option value="MS">Mato Grosso do Sul - MS</option>
                    <option value="MG">Minas Gerais - MG</option>
                    <option value="PA">Pará - PA</option>
                    <option value="PB">Paraíba - PB</option>
                    <option value="PR">Paraná - PR</option>
                    <option value="PE">Pernambuco - PE</option>
                    <option value="PI">Piauí - PI</option>
                    <option value="RJ">Rio de Janeiro - RJ</option>
                    <option value="RN">Rio Grande do Norte - RN</option>
                    <option value="RS">Rio Grande do Sul - RS</option>
                    <option value="RO">Rondônia - RO</option>
                    <option value="RR">Roraima - RR</option>
                    <option value="SC">Santa Catarina - SC</option>
                    <option value="SP">São Paulo - SP</option>
                    <option value="SE">Sergipe - SE</option>
                    <option value="TO">Tocantins - TO</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label
                    htmlFor="dom-fitogeograficos"
                    className="text-nowrap form-label svelte-munhvf"
                  >
                    Phytogeographic Domains
                    <div className="svelte-6o4qkf">
                      <button
                        type="button"
                        className="ModalButton m-0 p-0 svelte-6o4qkf"
                      />
                    </div>
                  </label>
                  <select
                    id="dom-fitogeograficos"
                    name="domFitogeograficos"
                    className="form-select svelte-munhvf"
                  >
                    <option value="QUALQUER">any</option>
                    <option value="AMAZONIA">Amazon Rainforest</option>
                    <option value="CAATINGA">Caatinga</option>
                    <option value="CERRADO">Central Brazilian Savanna</option>
                    <option value="MATA_ATLANTICA">Atlantic Rainforest</option>
                    <option value="PAMPA">Pampa</option>
                    <option value="PANTANAL">Pantanal</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="col-sm-12 svelte-munhvf">
                <legend className="border-bottom border-dark svelte-munhvf">
                  Vegetation
                  <div className="svelte-6o4qkf">
                    <button
                      type="button"
                      className="ModalButton m-0 p-0 svelte-6o4qkf"
                    />
                  </div>
                </legend>
                <select
                  id="vegetacao"
                  name="vegetacao"
                  className="form-select svelte-munhvf"
                >
                  <option value="TODOS">all</option>
                  <option value="AREA_ANTROPICA">Anthropic area</option>
                  <option value="CAATINGA">Caatinga (stricto sensu)</option>
                  <option value="CAMPINARANA">Campinarana</option>
                  <option value="CAMPO_DE_ALTITUDE">
                    High Altitude Grassland
                  </option>
                  <option value="CAMPO_DE_VARZEA">
                    Flooded Field (Várzea)
                  </option>
                  <option value="CAMPO_LIMPO">Grassland</option>
                  <option value="CAMPO_RUPESTRE">Highland Rocky Field</option>
                  <option value="CARRASCO">Carrasco Vegetation</option>
                  <option value="CERRADO">Cerrado (lato sensu)</option>
                  <option value="FLORESTA_CILIAR_OU_GALERIA">
                    Riverine Forest and/or Gallery Forest
                  </option>
                  <option value="FLORESTA_DE_IGAPO">
                    Inundated Forest (Igapó)
                  </option>
                  <option value="FLORESTA_DE_TERRA_FIRME">
                    Terra Firme Forest
                  </option>
                  <option value="FLORESTA_DE_VARZEA">
                    Inundated Forest (Várzea)
                  </option>
                  <option value="FLORESTA_ESTACIONAL_DECIDUAL">
                    Seasonally Deciduous Forest
                  </option>
                  <option value="FLORESTA_ESTACIONAL_PERENIFOLIA">
                    Seasonal Evergreen Forest
                  </option>
                  <option value="FLORESTA_ESTACIONAL_SEMIDECIDUAL">
                    Seasonally Semideciduous Forest
                  </option>
                  <option value="FLORESTA_OMBROFILA">
                    Ombrophyllous Forest (Tropical Rain Forest)
                  </option>
                  <option value="FLORESTA_OMBROFILA_MISTA">
                    Mixed Ombrophyllous Forest
                  </option>
                  <option value="MANGUEZAL">Mangrove</option>
                  <option value="PALMEIRAL">Palm vegetation</option>
                  <option value="RESTINGA">Restinga</option>
                  <option value="SAVANA_AMAZONICA">Amazonian Savanna</option>
                  <option value="VEGETACAO_AQUATICA">Aquatic vegetation</option>
                  <option value="VEGETACAO_SOBRE_AFLORAMENTOS_ROCHOSOS">
                    Rock outcrop vegetation
                  </option>
                </select>
              </fieldset>
            </fieldset>
            <div className="row">
              <fieldset className="d-inline-block col-sm-4 svelte-munhvf">
                <legend className="text-nowrap border-bottom border-dark svelte-munhvf">
                  Show up to
                </legend>
                <select
                  id="buscar-ate"
                  name="mostrarAte"
                  className="form-select svelte-munhvf"
                >
                  <option value="SUBESP_VAR">subsp./var.</option>
                  <option value="ESPECIES">species</option>
                  <option value="GENERO">genus</option>
                  <option value="FAMILIA">family</option>
                </select>
              </fieldset>
              <fieldset className="d-inline-block col-sm-8 svelte-munhvf">
                <legend className="border-bottom border-dark svelte-munhvf">
                  Search Options
                </legend>
                <select
                  id="opcoes-de-busca"
                  name="opcoesBusca"
                  className="form-select svelte-munhvf"
                >
                  <option value="TODOS_OS_NOMES">List all names</option>
                  <option value="NOME_ACEITO">List only accepted names</option>
                </select>
              </fieldset>
            </div>
            <input type="hidden" name="loginUsuario" value="Visitante" />
            <input type="hidden" name="senhaUsuario" />
            <input type="hidden" name="contexto" value="consulta-publica" />
            <input type="hidden" name="pagina" value="1" />
            <footer className="text-end py-2">
              <button
                type="submit"
                className="btn text-decoration-none text-uppercase text-white shadow-inset svelte-1kg46cs"
                style={{ fontSize: "small" }}
              >
                Search
              </button>
            </footer>
          </form>
        </aside>
      </section>
    </QueryProvider>
  );
}
