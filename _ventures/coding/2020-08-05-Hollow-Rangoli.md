---
layout: post
title: Hollow Rangoli
description: One of the coding interview questions I answered from X company.
category: coding
tags: ["python", "hollow", "rangoli"]
---

# Hollow Rangoli

```py
"""
n = 4

  0 1 2 3 4 5 6 7 8
0 * * * * 1 * * * * 1
1 * * * 2 2 2 * * * 3
2 * * 3 3 3 3 3 * * 5
3 * 4 4 4 4 4 4 4 * 7
0 * 1 1 1 1 1 1 1 * 7
1 * *           * * 5
2 * * *       * * * 3
3 * * * *   * * * * 1

(2n+1)
0 = 1
1 = 3
2 = 5
3 = 7
(2n-1)
3 = 7
2 = 5
1 = 3
0 = 1
"""

def hollowrangoli(n):

    """
    * * * *   * * * *
    * * *       * * *
    * *           * *
    *               *
    *               *
    * *           * *
    * * *       * * *
    * * * *   * * * *
    """
    
    for i in range(n):
        print(" ".join((" "*(2*i+1)).center(2*n + 1,'*',)))


    for j in range(n-1,-1,-1):
        print(" ".join((" "*(2*j+1)).center(2*n + 1,'*',)))

if __name__ == '__main__':
    n = int(input('size: '))
    hollowrangoli(n)
```