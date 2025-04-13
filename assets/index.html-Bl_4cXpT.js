import{_ as a,c as n,a as t,o as m}from"./app-BIv_Kx6q.js";const p={};function e(l,s){return m(),n("div",null,s[0]||(s[0]=[t('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>Let the <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi></mrow><annotation encoding="application/x-tex">\\theta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span> denote the parameters of some model, and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> denote input data. Dataset <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>X</mi><mrow><mi>N</mi><mo>×</mo><mi>p</mi></mrow></msub><mo>=</mo><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>x</mi><mn>2</mn></msub><mo separator="true">,</mo><mo>…</mo><mo separator="true">,</mo><msub><mi>x</mi><mi>N</mi></msub><msup><mo stretchy="false">)</mo><mi>T</mi></msup></mrow><annotation encoding="application/x-tex">X_{N\\times p} = (x_1,x_2,\\dots,x_N)^T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span><span class="mbin mtight">×</span><span class="mord mathnormal mtight">p</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0913em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8413em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span></span></span></span></span></span></span></span> has <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi></mrow><annotation encoding="application/x-tex">N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> samples, each of which is a vector of dimension <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi></mrow><annotation encoding="application/x-tex">p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span>, and is generated by <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>x</mi><mi mathvariant="normal">∣</mi><mi>θ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">p(x|\\theta)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span></span></span></span>. We also assume that <strong>every sample is independent and identically distributed(i.i.d)</strong>.</p><p>Now there are 2 views to look at probability model. <strong>Frequentist thinks that <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi></mrow><annotation encoding="application/x-tex">\\theta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span> is just a constant</strong>, which can be obtained by applying maximum likelihood estimation(MLE):</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>θ</mi><mrow><mi>M</mi><mi>L</mi><mi>E</mi></mrow></msub><mo>=</mo><munder><mrow><mi mathvariant="normal">arg max</mi><mo>⁡</mo></mrow><mi>θ</mi></munder><mi>log</mi><mo>⁡</mo><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>X</mi><mi mathvariant="normal">∣</mi><mi>θ</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><munder><mrow><mi mathvariant="normal">arg max</mi><mo>⁡</mo></mrow><mi>θ</mi></munder><munderover><mo>∑</mo><mi>i</mi><mi>N</mi></munderover><mi>log</mi><mo>⁡</mo><mrow><mi>p</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi><mi>θ</mi><mo stretchy="false">)</mo></mrow></mrow><annotation encoding="application/x-tex">\\theta_{MLE} = \\argmax_\\theta \\log{p(X|\\theta)} = \\argmax_\\theta \\sum_i^N \\log{p(x_i|\\theta)} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">M</span><span class="mord mathnormal mtight">L</span><span class="mord mathnormal mtight" style="margin-right:0.05764em;">E</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.6965em;vertical-align:-0.9465em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4306em;"><span style="top:-2.1535em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop"><span class="mord mathrm" style="margin-right:0.01389em;">arg</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathrm">max</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9465em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.106em;vertical-align:-1.2777em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4306em;"><span style="top:-2.1535em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop"><span class="mord mathrm" style="margin-right:0.01389em;">arg</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathrm">max</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9465em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.8283em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span></span></span></span></span></span></p><p><strong>Bayesian takes probability theory to quantify the uncertainty, it thinks that <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi></mrow><annotation encoding="application/x-tex">\\theta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span> is not a constant, and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi></mrow><annotation encoding="application/x-tex">\\theta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span> actually subjects to a pre-set prior distribution.</strong> Bayes&#39;s theorem integrate observations and prior distribution to posterior distribution:</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>θ</mi><mi mathvariant="normal">∣</mi><mi>X</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>X</mi><mi mathvariant="normal">∣</mi><mi>θ</mi><mo stretchy="false">)</mo><mi>p</mi><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo></mrow><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>X</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>X</mi><mi mathvariant="normal">∣</mi><mi>θ</mi><mo stretchy="false">)</mo><mi>p</mi><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo></mrow><mrow><mo>∫</mo><mi>p</mi><mo stretchy="false">(</mo><mi>X</mi><mi mathvariant="normal">∣</mi><mi>θ</mi><mo stretchy="false">)</mo><mi>d</mi><mi>θ</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">p(\\theta | X )=\\frac{p(X|\\theta)p(\\theta)}{p(X)} = \\frac{p(X|\\theta)p(\\theta)}{\\int p(X|\\theta)d\\theta} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.363em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mclose">)</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4281em;vertical-align:-1.0011em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.305em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.0011em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><p>In the above equation, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>θ</mi><mi mathvariant="normal">∣</mi><mi>X</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">p(\\theta | X )</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mclose">)</span></span></span></span> is the posterior. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>θ</mi><mi mathvariant="normal">∣</mi><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">p(\\theta|w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span> and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">p(w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span> are likelihood and prior, respectively. We can get the denominator by integrating <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span> over the marginal function.</p><p>The denominator in Bayes&#39; theorem is the normalization factor that ensures the posterior is a valid probability distribution. Therefore we can express the Bayes&#39;s Theorem as : <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>postrior</mtext><mo>∝</mo><mtext>likelihood</mtext><mo>×</mo><mtext>prior</mtext></mrow><annotation encoding="application/x-tex">\\text{postrior} \\propto \\text{likelihood} \\times \\text{prior}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8623em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord">postrior</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∝</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord text"><span class="mord">likelihood</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8623em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord">prior</span></span></span></span></span>, and all the components can be seen as a function of <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>.</p><p>To obtain <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi></mrow><annotation encoding="application/x-tex">\\theta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span>, we usually apply maximum a posteriori estimation(MAP):</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>θ</mi><mrow><mi>M</mi><mi>A</mi><mi>P</mi></mrow></msub><mo>=</mo><munder><mrow><mi mathvariant="normal">arg max</mi><mo>⁡</mo></mrow><mi>θ</mi></munder><mi>p</mi><mo stretchy="false">(</mo><mi>θ</mi><mi mathvariant="normal">∣</mi><mi>X</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\theta_{MAP} = \\argmax_\\theta p(\\theta|X) </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">M</span><span class="mord mathnormal mtight">A</span><span class="mord mathnormal mtight" style="margin-right:0.13889em;">P</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.6965em;vertical-align:-0.9465em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4306em;"><span style="top:-2.1535em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop"><span class="mord mathrm" style="margin-right:0.01389em;">arg</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathrm">max</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9465em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mclose">)</span></span></span></span></span></p><p>Then after we obtain posterior distribution, we can apply it to predict new data, this step is also called Bayes Prediction:</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>p</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mi>e</mi><mi>w</mi></mrow></msub><mi mathvariant="normal">∣</mi><mi>X</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mo>∫</mo><mi>θ</mi></msub><mrow><mi>p</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mi>n</mi></msub><mi>e</mi><mi>w</mi><mi mathvariant="normal">∣</mi><mi>θ</mi><mo stretchy="false">)</mo><mo separator="true">⋅</mo><mi>p</mi><mo stretchy="false">(</mo><mi>θ</mi><mi mathvariant="normal">∣</mi><mi>X</mi><mo stretchy="false">)</mo><mi>d</mi><mi>θ</mi></mrow></mrow><annotation encoding="application/x-tex">p(x_{new}|X) = \\int_\\theta {p(x_new|\\theta)·p(\\theta|X)d\\theta} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.2719em;vertical-align:-0.9119em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:-0.4258em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">θ</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9119em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mpunct">⋅</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mclose">)</span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span></span></span></p><h2 id="some-disadvantages" tabindex="-1"><a class="header-anchor" href="#some-disadvantages"><span>Some Disadvantages</span></a></h2><p>Likelihood usually comes from dataset. Using MLE to obtain parameters sometimes bring bias. For example, When it is in Gaussian Model context, MLE underestimates the variance parameter even though mean parameter is unbiased.</p><p>On the other hand, Bayes method must choose a prior distribution first. There are good things about having a prior distribution, like it prevents the result ending to some extremes. But also there are arguments criticize that sometimes chosen prior is just for simplifying computation without reflecting any truth. In other hands, computing denominator is also very difficult. Methods are proposed to solve these problems.</p>',15)]))}const r=a(p,[["render",e]]),o=JSON.parse('{"path":"/ML/strwr24u/","title":"Some-Definitions","lang":"en-US","frontmatter":{"title":"Some-Definitions","createTime":"2025/03/25 13:23:46","permalink":"/ML/strwr24u/"},"headers":[],"readingTime":{"minutes":1.35,"words":406},"git":{"updatedTime":1742995093000,"contributors":[{"name":"issyugk3","username":"issyugk3","email":"xwzhou.sgk@gmail.com","commits":2,"avatar":"https://avatars.githubusercontent.com/issyugk3?v=4","url":"https://github.com/issyugk3"}]},"filePathRelative":"notes/ML/1.Bayesian-Models/1.Some-Definitions.md"}');export{r as comp,o as data};
