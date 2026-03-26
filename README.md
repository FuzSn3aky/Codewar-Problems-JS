# FORMULAS



## 1. RECTANGLE INTO SQUARES ALGORITHM([CodeWar problem](https://github.com/FuzSn3aky/Codewar-Problems-JS/blob/main/Arrays/Rectangle_Into_Squares.js)) :

        SUM OF SQUARES(AREA)

$$
\begin{aligned}
\displaystyle \sum_{Q\neq0}
\left ( \sum_{j=0}^{\left\lfloor Q \right\rfloor -1} d \quad ; \quad
D \leftarrow D_{before}-\left\lfloor Q \right\rfloor \cdot d^2
\quad ; \quad d \leftarrow \frac {D}{S_{last}}
\right )
\end{aligned}
$$

    ADDING SQUARE LENGTH/WIDTH TO ARRAY
$$
\begin{aligned}
\displaystyle \sum_{Q\neq0}
\left ( S \leftarrow \bigcup \underbrace{(d,d,...,d)}_{\left\lfloor Q  \right\rfloor \text{times}}  \quad ; \quad
D \leftarrow D_{before}-\left\lfloor Q \right\rfloor \cdot d^2
\quad ; \quad d \leftarrow \frac {D}{S_{last}}
\right )
\end{aligned}
$$

