#!/usr/local/bin/python3

import numpy as np
import time

VEC_LEN = 1000000
AVERAGING = 1000

a = np.random.rand(VEC_LEN)
b = np.random.rand(VEC_LEN)

tic = time.time()
for i in range(AVERAGING):
  c = np.dot(a,b)
toc = time.time()

print("c: " + str(c))
print("Vectorized version: " + str ((toc - tic) * 1000 / AVERAGING) + "ms")

c = 0

tic = time.time()
for i in range(VEC_LEN):
  c += a[i]* b[i]
toc = time.time()

print("c: " + str(c))
print("For loop: " + str ((toc-tic) * 1000) + "ms")
