const PDFDocument = require("pdfkit");

const heroesModel = require("../models/heroesModel");

const exportHeroesPDF = async (req, res) => {
    try {
        const heroes = await heroesModel.getHeroes();

        res.setHeader("Content-Type", "applicaion/pdf");
        res.setHeader("Content-Disposition", "inline; filename=heroes.pdf");

        const doc = new PDFDocument({margin: 50});
        doc.pipe(res);

        doc.fillColor("#0A3D91").fontSize(24).text("Relatório de Heróis", {align: "center", underline: true});
        doc.moveDown(1);

        doc.fillColor("#0A3D91").fontSize(14).text("Id, Nome, Editora", {underline: true});
        doc.moveDown(0.5);

        heroes.forEach((hero) => {
            doc.text(`${hero.id} | ${hero.name} | ${hero.publisher_name || "Sem Editora"}`);
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar PDF!"});
    }
};

module.exports = { exportHeroesPDF };