var Calculos = {
    creditoCusteio: 950.0,
    recursosProprios: 50.0,
    parcelaInvestimento: 200.50,
    GRM: 7000.00,
    taxaJurosContratacao: 5.5,
    orcamentoEnquadrado: 0,
    areaFinanciada: 30.0,
    areaCultivada: 28.48,
    creditoCusteioAjustado: 0,
    recursosPropriosAjustados: 0,
    orcamentoAjustado: 0,
    glosaCreditoCusteio: 0,
    glosaRecursosProprios: 0,
    glosaCreditoCusteioAjustada: 0,
    glosaRecursosPropriosAjustada: 0,
    creditoCusteioUtilizado: 0,
    orcamentoComprovadoAjustado: 0,
    GRMAjustada: 0,
    parcelaInvestimentoAjustada: 0,
    encargosFinanceiros: 0,
    dataLiberacaoContrato: 1474772400000, //25/09/1994
    taxaJurosProporcional: 0,
    totalGlosadoAjustado: 0,
    perdasNaoAmparadas: 0,
    receitasConsideradas: 0,
    demaisDeducoes: 0,
    baseCalculoCobertura: 0,
    limiteCobertura: 0,
    
    calcularEPreencherSumula: function() {
        this.calcularSumula();
        this.preencherSumula();
    },

    calcularSumula: function() {
        this.calcularOrcamentoEnquadrado();
        this.calcularOrcamentoAjustado();
        this.calcularCamposQueDependemDasGlosas();
        this.calcularDemaisDeducoes();
    },
    
    calcularCamposQueDependemDasGlosas: function() {
        this.calcularCreditoCusteioUtilizado();
        this.calcularRecursosPropriosUtilizados();
        this.calcularOrcamentoComprovadoAjustado();
        this.calcularGRMAjustada();
        this.calcularParcelaInvestimentoAjustada();
        this.calcularEncargosFinanceiros();
        this.calcularTotalGlosadoAjustado();
        this.calcularBaseCalculoCobertura();
        this.calcularLimiteCobertura();
    },
    
    preencherSumula: function() {
        this.preencherOrcamentoEnquadrado();
        this.preencherOrcamentoAjustado();
        this.preencherCamposQueDependemDasGlosas();
        this.preencherDemaisDeducoes();
    },
    
    preencherCamposQueDependemDasGlosas: function() {
        this.preencherCreditoCusteioUtilizado();
        this.preencherRecursosPropriosUtilizados();
        this.preencherOrcamentoComprovadoAjustado();
        this.preencherGRMAjustada();
        this.preencherParcelaInvestimentoAjustada();
        this.preencherEncargosFinanceiros();
        this.preencherTotalGlosadoAjustado();
        this.preencherBaseCalculoCobertura();
        this.preencherLimiteCobertura();
    },
    
    preencherOrcamentoAjustado: function() {
        jQuery('#orcamento-ajustado .valor').html(this.formatarValorMonetario(this.orcamentoAjustado));
        jQuery('#orcamento-ajustado .var-1').html(this.formatarValorMonetario(this.creditoCusteioAjustado));
        jQuery('#orcamento-ajustado .var-2').html(this.formatarValorMonetario(this.recursosPropriosAjustados));
    },
    
    preencherOrcamentoEnquadrado: function() {
        jQuery('#orcamento-enquadrado .valor').html(this.formatarValorMonetario(this.orcamentoEnquadrado));
        jQuery('#orcamento-enquadrado .var-1').html(this.formatarValorMonetario(this.creditoCusteio));
        jQuery('#orcamento-enquadrado .var-2').html(this.formatarValorMonetario(this.recursosProprios));
    },
    
    preencherCreditoCusteioUtilizado: function() {
        jQuery('#credito-custeio-utilizado .valor').html(this.formatarValorMonetario(this.creditoCusteioUtilizado));
        jQuery('#credito-custeio-utilizado .var-1').html(this.formatarValorMonetario(this.creditoCusteioAjustado));
        jQuery('#credito-custeio-utilizado .var-2').html(this.formatarValorMonetario(this.glosaCreditoCusteioAjustada));
    },

    preencherRecursosPropriosUtilizados: function() {
        jQuery('#recursos-proprios-utilizados .valor').html(this.formatarValorMonetario(this.recursosPropriosUtilizados));
        jQuery('#recursos-proprios-utilizados .var-1').html(this.formatarValorMonetario(this.recursosPropriosAjustados));
        jQuery('#recursos-proprios-utilizados .var-2').html(this.formatarValorMonetario(this.glosaRecursosPropriosAjustada));
    },
        
    preencherOrcamentoComprovadoAjustado: function() {
        jQuery('#orcamento-comprovado-ajustado .valor').html(this.formatarValorMonetario(this.orcamentoComprovadoAjustado));
        jQuery('#orcamento-comprovado-ajustado .var-1').html(this.formatarValorMonetario(this.creditoCusteioUtilizado));
        jQuery('#orcamento-comprovado-ajustado .var-2').html(this.formatarValorMonetario(this.recursosPropriosUtilizados));
    },
        
    preencherGRMAjustada: function() {
        jQuery('#grm-ajustada .valor').html(this.formatarValorMonetario(this.GRMAjustada));
        jQuery('#grm-ajustada .var-1').html(this.formatarValorMonetario(this.GRM));
        jQuery('#grm-ajustada .var-2').html(this.formatarValorMonetario(this.orcamentoComprovadoAjustado));
        jQuery('#grm-ajustada .var-3').html(this.formatarValorMonetario(this.orcamentoEnquadrado));
    },
        
    preencherDemaisDeducoes: function() {
        jQuery('#demais-deducoes .valor').html(this.formatarValorMonetario(this.demaisDeducoes));
        jQuery('#demais-deducoes .var-1').html(this.formatarValorMonetario(this.perdasNaoAmparadas));
        jQuery('#demais-deducoes .var-2').html(this.formatarValorMonetario(this.receitasConsideradas));
    },
        
    preencherTotalGlosadoAjustado: function() {
        jQuery('#total-glosado-ajustado .valor').html(this.formatarValorMonetario(this.totalGlosadoAjustado));
        jQuery('#total-glosado-ajustado .var-1').html(this.formatarValorMonetario(this.orcamentoAjustado));
        jQuery('#total-glosado-ajustado .var-2').html(this.formatarValorMonetario(this.orcamentoComprovadoAjustado));
    },
        
    preencherEncargosFinanceiros: function() {
        jQuery('#encargos-financeiros .valor').html(this.formatarValorMonetario(this.encargosFinanceiros));
        jQuery('#encargos-financeiros .var-1').html(this.formatarPercentual(this.taxaJurosProporcional));
        jQuery('#encargos-financeiros .var-2').html(this.formatarValorMonetario(this.creditoCusteioUtilizado));
    },

    preencherParcelaInvestimentoAjustada: function() {
        jQuery('#parcela-investimento-ajustada .valor').html(this.formatarValorMonetario(this.parcelaInvestimentoAjustada));
        jQuery('#parcela-investimento-ajustada .var-1').html(this.formatarValorMonetario(this.parcelaInvestimento));
        jQuery('#parcela-investimento-ajustada .var-2').html(this.formatarValorMonetario(this.orcamentoComprovadoAjustado));
        jQuery('#parcela-investimento-ajustada .var-3').html(this.formatarValorMonetario(this.orcamentoEnquadrado));
    },
    
    preencherBaseCalculoCobertura: function() {
        jQuery('#base-calculo-cobertura .valor').html(this.formatarValorMonetario(this.baseCalculoCobertura));
        jQuery('#base-calculo-cobertura .var-1').html(this.formatarValorMonetario(this.orcamentoComprovadoAjustado));
        jQuery('#base-calculo-cobertura .var-2').html(this.formatarValorMonetario(this.encargosFinanceiros));
    },
    
    preencherLimiteCobertura: function() {
        jQuery('#limite-cobertura .valor').html(this.formatarValorMonetario(this.limiteCobertura));
        jQuery('#limite-cobertura .var-1').html(this.formatarValorMonetario(this.orcamentoComprovadoAjustado));
        jQuery('#limite-cobertura .var-2').html(this.formatarValorMonetario(this.encargosFinanceiros));
        jQuery('#limite-cobertura .var-3').html(this.formatarValorMonetario(this.demaisDeducoes));
    },
    
    formatarValorMonetario: function(valor) {
        return this.aplicarMascara(valor, 'R$');
    },
    
    formatarPercentual: function(valor) {
        return this.aplicarMascara(valor, '%');
    },
    
    aplicarMascara: function(valor, prefixoSufixo) {
        var separacaoValor = (valor + '').split('.');
        var numbers = (valor + '').replace(/[^0-9]/g, '');
        
        if (separacaoValor.length > 1 && separacaoValor[1].length == 1)
            numbers += '0';
        else if (separacaoValor.length == 1)
            numbers += '00';
        
        var inverseNumber = (numbers + '').split('').reverse().join('');
        
        if (numbers === 0)
			valor = '0,00'
		else if (numbers > 0 && inverseNumber.length === 1)
			valor = '0,0' + numbers;
		else if (numbers > 0 && inverseNumber.length === 2)
			valor = '0,' + numbers;
		else if (inverseNumber.length === 3 ||
				 inverseNumber.length === 4 ||
				 inverseNumber.length === 5)
			valor = inverseNumber.replace(/([0-9]{2})([0-9]{1,3})/, '$1,$2');
		else if (inverseNumber.length === 6 ||
				 inverseNumber.length === 7 ||
				 inverseNumber.length === 8)
			valor = inverseNumber.replace(/([0-9]{2})([0-9]{3})([0-9]{1,3})/, '$1,$2.$3');
		else if (inverseNumber.length === 9 ||
				 inverseNumber.length === 10 ||
				 inverseNumber.length === 11)
			valor = inverseNumber.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{1,3})/, '$1,$2.$3.$4');
		else if (inverseNumber.length === 12 ||
				 inverseNumber.length === 13 ||
				 inverseNumber.length === 14)
			valor = inverseNumber.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{1,3})([0-9]{1,3})/, '$1,$2.$3.$4.$5');
	
        if (prefixoSufixo === 'R$')
		  return 'R$ ' + (valor + '').split('').reverse().join('');
        else
            return (valor + '').split('').reverse().join('') + '%';
    },
    
    toFixed: function(valor) {
        return parseFloat(valor.toFixed(2));
    },
    
    calcularOrcamentoEnquadrado: function() {
        this.orcamentoEnquadrado = this.toFixed(this.creditoCusteio + this.recursosProprios);
    },
    
    calcularOrcamentoAjustado: function() {
        this.creditoCusteioAjustado = this.toFixed((this.creditoCusteio * this.areaCultivada) / this.areaFinanciada);
        this.recursosPropriosAjustados = this.toFixed((this.recursosProprios * this.areaCultivada) / this.areaFinanciada);
        this.orcamentoAjustado = this.toFixed(this.creditoCusteioAjustado + this.recursosPropriosAjustados);
    },
    
    calcularCreditoCusteioUtilizado: function() {
        this.glosaCreditoCusteioAjustada = this.toFixed(this.glosaCreditoCusteio * this.areaCultivada / this.areaFinanciada);
        this.creditoCusteioUtilizado = this.toFixed(this.creditoCusteioAjustado - this.glosaCreditoCusteioAjustada);
    },
    
    calcularRecursosPropriosUtilizados: function() {
        this.glosaRecursosPropriosAjustada = this.toFixed(this.glosaRecursosProprios * this.areaCultivada / this.areaFinanciada);
        this.recursosPropriosUtilizados = this.toFixed(this.recursosPropriosAjustados - this.glosaRecursosPropriosAjustada);
    },
    
    calcularOrcamentoComprovadoAjustado: function() {
        this.orcamentoComprovadoAjustado = this.toFixed(this.creditoCusteioUtilizado + this.recursosPropriosUtilizados);
    },
    
    calcularGRMAjustada: function() {
        this.GRMAjustada = this.toFixed(this.GRM * (this.orcamentoComprovadoAjustado / this.orcamentoEnquadrado));
    },
    
    calcularParcelaInvestimentoAjustada: function() {
        this.parcelaInvestimentoAjustada = this.toFixed(this.parcelaInvestimento * this.orcamentoComprovadoAjustado / this.orcamentoEnquadrado);
    },
    
    calcularEncargosFinanceiros: function() {
        var dataLiberacao = new Date(this.dataLiberacaoContrato).getTime();
        var hoje = new Date().getTime();
        var diferencaEntreDias = (parseInt((hoje - dataLiberacao) / (1000 * 60 * 60 * 24)));
        
        this.taxaJurosProporcional = this.toFixed(diferencaEntreDias * this.taxaJurosContratacao / 365);
        this.encargosFinanceiros = this.toFixed(this.taxaJurosProporcional * this.creditoCusteioUtilizado / 100);
    },
    
    calcularTotalGlosadoAjustado: function() {
        this.totalGlosadoAjustado = this.toFixed(this.orcamentoAjustado - this.orcamentoComprovadoAjustado);
    },
    
    calcularDemaisDeducoes: function() {
        this.demaisDeducoes = this.toFixed(this.perdasNaoAmparadas + this.receitasConsideradas);
    },
    
    calcularBaseCalculoCobertura: function() {
        this.baseCalculoCobertura = this.toFixed(this.orcamentoComprovadoAjustado + this.encargosFinanceiros);
    },
    
    calcularLimiteCobertura: function() {
        this.limiteCobertura = this.toFixed(this.orcamentoComprovadoAjustado + this.encargosFinanceiros - this.demaisDeducoes);
    }
};

Calculos.calcularEPreencherSumula();

jQuery('#input-glosa-credito-custeio').keyup(function(ct, event) {
    var valorSemFormatacao = $(this).val().replace(/[^0-9]/g, '');
    valorSemFormatacao = valorSemFormatacao.length === 0 ? 0 : valorSemFormatacao;
        
    Calculos.glosaCreditoCusteio = Calculos.toFixed(parseInt(valorSemFormatacao) / 100);
    
    Calculos.calcularCamposQueDependemDasGlosas();
    Calculos.preencherCamposQueDependemDasGlosas();
});

jQuery('#input-glosa-recursos-proprios').keyup(function(ct, event) {
    var valorSemFormatacao = $(this).val().replace(/[^0-9]/g, '');
    valorSemFormatacao = valorSemFormatacao.length === 0 ? 0 : valorSemFormatacao;
        
    Calculos.glosaRecursosProprios = Calculos.toFixed(parseInt(valorSemFormatacao) / 100);
    
    Calculos.calcularCamposQueDependemDasGlosas();
    Calculos.preencherCamposQueDependemDasGlosas();
});

jQuery('#input-perdas-nao-amparadas').keyup(function(ct, event) {
    var valorSemFormatacao = $(this).val().replace(/[^0-9]/g, '');
    valorSemFormatacao = valorSemFormatacao.length === 0 ? 0 : valorSemFormatacao;
    
    Calculos.perdasNaoAmparadas = Calculos.toFixed(parseInt(valorSemFormatacao) / 100);
    
    Calculos.calcularDemaisDeducoes();
    Calculos.preencherDemaisDeducoes();
    Calculos.calcularLimiteCobertura();
    Calculos.preencherLimiteCobertura();
});

jQuery('#receitas-consideradas').keyup(function(ct, event) {
    var valorSemFormatacao = $(this).val().replace(/[^0-9]/g, '');
    valorSemFormatacao = valorSemFormatacao.length === 0 ? 0 : valorSemFormatacao;
    
    Calculos.receitasConsideradas = Calculos.toFixed(parseInt(valorSemFormatacao) / 100);
    
    Calculos.calcularDemaisDeducoes();
    Calculos.preencherDemaisDeducoes();
    Calculos.calcularLimiteCobertura();
    Calculos.preencherLimiteCobertura();
});