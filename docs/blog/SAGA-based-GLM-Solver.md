---
title: Applications of SAGA-based GLM Solver
createTime: 2025/07/14 13:13:53
permalink: /article/vl8c3j8s/
---
>I actually came across of the paper "Leveraging Sparse Linear Layers for Debuggable Deep Networks" last year and I have been using the package they developed to a project. But I never had a chance to take a note.
<br>This paper investigates about applying generalized linear model(GLM) via elastic net to see the importance of deep feature representations of data points obtained from some pre-trained model. The authors developed a SAGA-based GLM solver to scale to large datasets. You can check their source code at [here](https://github.com/madrylab/debuggabledeepnetworks).

The authors of this paper construct a sparse decision layer for feature selection from the model's deep feature representations, which can be used for subsequent interpretability analysis and this so-called sparse decision layer could be applied to any layers. 

The sparse decision layer primarily achieves this by fitting a GLM based on an elastic net. Specifically, let $(X,y)$ denote **normalized** deep feature representations of input data points $x$ and its corresponding target $y$, respectively. The goal is to fit a sparse linear model of the form $E(Y|X=x)=x^t\beta+\beta_0$. The sparsity is achieved via elastic net, which means the optimization is formulated as follows:
$$
\underset{\beta}{\text{min}}\frac{1}{2N}||X^T\beta+\beta_0-y ||^2_2+\lambda R_\alpha(\beta)
$$ 
where $N$ is the total number of samples, $\beta$ denote as model parameters(weights and bias), $\lambda R_\alpha(\beta)$ is the elastic net penalty for given hyperparameters $\lambda$ and $\alpha$. $R_\alpha(\beta)$ has the form as follows:
$$
R_\alpha(\beta)=(1-\alpha)\frac{1}{2}||\beta||^2_2+\alpha||\beta||_1.
$$
It's easy to find that the form of network ranges from Ridge Regression and Lasso Regression while the $\alpha$ changes. By computing different regularization paths(different value of $\lambda$), we could obtain different weights of the model, thus gaining the best fit model for application(or best ACC). And the weights corresponding to different features would indicate their relative importance(bigger the value, more important the feature).

However the typical solver could not scale to large datasets arise in deep learning, therefore they developed a SAGA-based solver using GPU to scale to large datasets.

**The interesting thing is that they found use only Top-$k$ features(The Top-$k$ weights) could achieve quite results. Like the ACC or other indicators only decreased a little.** It means most of the features may not be that useful to the model. This could provide us a great chance to discover patterns by investigating only a few features.
