function abrirCurso() {

    const select = document.getElementById("cursos");
    const curso = select.value;

    if (curso === "") {
        return;
    }

    let confirmar = confirm("Deseja abrir informações sobre este curso?");

    if (confirmar) {

        let titulo = "";
        let descricao = "";

        switch(curso) {

            case "ADS":
                titulo = "Análise e Desenvolvimento de Sistemas";

                descricao = `
                O curso de Análise e Desenvolvimento de Sistemas forma profissionais
                capacitados para criar softwares, sites, aplicativos e sistemas empresariais.
                Durante o curso, os alunos aprendem programação, banco de dados,
                engenharia de software, redes e desenvolvimento web.
                O profissional pode atuar em empresas de tecnologia, bancos,
                indústrias e startups.
                `;
                break;

            case "LOG":
                titulo = "Logística";

                descricao = `
                O curso de Logística prepara profissionais para planejar,
                controlar e otimizar o transporte, armazenamento e distribuição
                de produtos. O aluno aprende sobre cadeia de suprimentos,
                gestão de estoques, transporte e processos organizacionais.
                É uma área muito importante para empresas de comércio,
                indústrias e centros de distribuição.
                `;
                break;

            case "MAN":
                titulo = "Manufatura Avançada";

                descricao = `
                O curso de Manufatura Avançada é voltado para tecnologias industriais,
                automação e processos modernos de produção.
                O estudante aprende sobre robótica, controle automatizado,
                processos industriais e inovação tecnológica.
                O profissional pode trabalhar em indústrias de alta tecnologia
                e automação industrial.
                `;
                break;

            case "POL":
                titulo = "Polímeros";

                descricao = `
                O curso de Polímeros forma profissionais especializados
                em materiais plásticos, borrachas e polímeros industriais.
                O aluno aprende sobre propriedades dos materiais,
                processos de fabricação e controle de qualidade.
                O mercado inclui indústrias automotivas, químicas
                e de embalagens.
                `;
                break;

            case "GQ":
                titulo = "Gestão da Qualidade";

                descricao = `
                O curso de Gestão da Qualidade ensina técnicas para melhorar
                processos, produtos e serviços dentro das empresas.
                O estudante aprende sobre auditorias, normas ISO,
                planejamento estratégico e controle de qualidade.
                O profissional atua garantindo eficiência e excelência
                nos processos organizacionais.
                `;
                break;
        }

        let novaJanela = window.open("", "", "width=600,height=300");

        novaJanela.document.write(`
            <html>
                <head>
                    <title>${titulo}</title>

                    <style>
                        body {
                            font-family: Arial;
                            padding: 20px;
                            background-color: #f4f4f4;
                            line-height: 1.6;
                        }

                        h1 {
                            color: #003366;
                        }

                        p {
                            font-size: 17px;
                            text-align: justify;
                        }
                    </style>
                </head>

                <body>
                    <h1>${titulo}</h1>
                    <p>${descricao}</p>
                </body>
            </html>
        `);
    }

    select.value = "";
}