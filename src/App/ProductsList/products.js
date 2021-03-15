const products = [
    {
        id: 1,
        imageUrl: 'https://image.freepik.com/free-vector/new-product-seal_23-2147503128.jpg',
        name: 'product #1',
        count: 4,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [Comment, Comment]
    },
    {
        id: 2,
        imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABAlBMVEX///8BgkkREiQLsUsAAADa2tsAgEUAezwAf0QAfkEAezsAeTcArD0AgUmOuqMAfD/n8ewAsEZHmG261MZcoXwAqzkEhlCJtp2hxbMbjFiy377M6tepyrmW16xiwn5nxIT2+/cAABc5lWjD5s254scAABzQ5dwIqUkAABXk9OkukWJBQUzF3dHh7uh/zpgAcy0XGCmMjZQpKjgAAA50sJBvrIsxuGDW8OGi27UDjElyyo+L0qOcnKB5eYFtbnYAAB9bW2ZISVM0NUFjp4RIvW8mtVkAbyFQvnEFlEkIn0kAoT0EkEcJpEoApiNiY2uqq66Xl57r6+vDxcgiIzWDhIq1trdOYocNAAAUtElEQVR4nO2dCUPqSLbHQTALiZAAYXUpEXiyqbiArUKLStvv9XvKXO3v/1VenVqSqhCXew3cuT31n7lDyEb9ck6dOrXESSSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSU/h3lUCFp52C7XC5X2ijqAtSulMvZwiDybqhQPs/2l69rX2A5Xy3rd6jQKBFpWWFnP5/L6Kap69XK8hXZqoWPmZaZby8f3C7hC3NWtRA+kM+YejHGcn+gfsPSiJK6AHZuGUkqTe+GnvKgqmvsoGGVw/c7t+hBzcrKB/qZZNKKtvEK1M/7BCJYXk8GMpJScdqmIRy0LuQbZq0t/5Bss7yRNO9XRyKpX8wIhQzALkQuTFYVrnG2NOmgbJh2hhjLMuGjioQjBSuZzKzHYG3s9GIRfbDtTFJW7jy4Km+GDupiPcvDg9LaifMcHBGrZ1dLmsJtVignEyoiB0MlbhNtufDbVograeSDew6O8Y7MNt6q4mu1RnAErtPWFBIbsk/5YFnmiFuZEo8SwbOu8j1GifurFZisTJ4VlD8LW1ZAgq/LLQWaFemCWszIhcBMbq5BYsCNZiJ6rMAMpl+gRIV5rBnEjy7YiVgQYmBS3+YH4FwdrQlsGx65pucLOQmswMqbAUP0OQgrYoMGG+pkeRZ5cvyOTsA5gAtNbiPw7kwo/K9O7RyOX41CwrEksKIhVh3megZtWR3mfhkSyTm11ed3hGeSI7dBllj9sHdrSbQuMMTSAxkMsXDOQto5c8wM+bbN6xWpPIj7KTdMQQ8uJHGftRMIP6tMRAazKuWpf8lgfeaJORoSeOinEeKeeSKzBDOu1mU3rABYht6VPBCD7i/roUZtPZLBWEzUSrQgbUt0vi61EQ+S3JwaK3Q255+Z0ILaBw6sr9FgXDLYvWwFh5WdxGqH+R4vZZaFndxA+M7AyHUm2cT8WmmtSKzsEhhr3Xi9d0pC9ODm01m04FUuw76LrpgjZoetgbmUN65HEhhPO3i+ipj3kQDPQTgYr4+8MSAtBTOnxS+C9tKvhWuVBMYDuh/pmAVJ0bjr8QyrzQMNa6LaelIK96RJG2Q+Z7Bx7ejxYVRfFdjAksuayLN6BcGEBwtep9r8KbBgQvyWNtDEa3NgvKLJ/BptX+SL2YiuKVbnOuXZrut6KwPjjW6ORzEGppUcPwlL6iwHHHCwC+Fk2hYQr4Q2AghJHdzWMqZh6BZOxpaw9mw7RWSPVwVW4NWIgxV5qjzw260AjLmiwTuQxFdNsOe9yTpk3GDlDA+p+TDZte2muDqrAvPjA89fOYw2CJJDns4OmAWNongrsB85opfZgAA23PYxuQlxBrkf3RnZPpb7ECPX94Nt5d4Co86qF8ukOwb9LxgQKEJzCExGg3wc94VfrwvmSrnXqwPLfAnM0QgAKT8MGkCVhW5CGXzU6Cf6cAexa9oUuVJenFXsjTrmg/E65viQy2CBc/V5VUpmgBZbDjwTgROS2EkCq+mPfRxIXO4oTq4PwPxw7wjBg4MtdzUT/STpdpsWYMCAAFDQlhsifVvoAOD6ZadEec3Vgfk9y3C4hwgXDve8gTbFTr9TrlqWViT1CKctBkBTO5Gj5Hxu4ZFor5hDxycbaJJ5nL8Blgt3jhH9gApLxj3IkAHtnHWFUZ4j2WB2nK1zGIxn89wIPFckFd5PqVgd8XPF6IwJ8REcRHqdNGRAisb6ROMQV6whMQzGk2DjIiic7z1+W8DyIj48ovcjb1zJ0JBPf4FFGOIB1OS7siM+xswV6rbkQ92WpOBt3PWkbkoyyB1lIZPfkySO7FGRJoP4Z8eTuOZotWChjiYPfCQ/55Q8stBhRBzKI++L264t6nMkIrFMmYLBk5BqmDuKfzRVBqvIQwO8GtGxz4Y8NBAaAgndFp/LhtzaS2Bwt7ngifbDCkaJZTDubqwesXjBjHJvSiTdLcmAsiDZoEMDDExwxZwjhQ7Xu4ofa3n4TfzG22T2uHnzbZBKxZsGK6qPNcBpFRslYIOMNO8iRgd3qPlg9jzehjkaTK5kDvdEGi4cqeHi1qxG3RVGcPwhN8ioWK3127Ej6omunbpGUTeIHawgfmW5hj/IxCaRNEiJER9LjZpsAGta/tA9TThhC5WSLPLvQY/Z9kaXK8JaAkvwWSTrvlLU5UN+xqXlshV+nhlV77ELC7NIWZIrgv+2ycQZEB+NHnaPmnF2LD8C47MoSUPnXZakX3Z/7snMLU0xCYJcVxjBafvDVxB0NXM9M5thMJ5FBbKCsMdNFugtgxnikBsZDMEdBJLYGJHNQ/wKg/kR3y+6WJDQ/PRWUJEEAb4l5lmkOdS0IumHHtMo2qldXu9cHqDVUCUiwBKVY7HsRlWySUOa4Y2epsSNlZZHjuMMuIgLa4bguw8eDLjZnv14uaIp3GUwPwkkFayBpNOROMWrNQqF7Uolmy2fn1/cF4vFPFaDsJeqJTCSaWZAwTVaiZrSz6hcbzUBf7DNOiPGfWGbqygU5P4eF7fR7VZLJfzMTWMrKUjTdT2Xy5lEhmGwxTD0WLg6MuldCCtC79m13YN4oZxK0bD8GmVkdCrxAePdhl/gt4r6ndKsIgolwV6cnbHBhaYbHxdjFcp1cYScSwNU8aWLWd2MyQI/ILOLEp2UuwKbofxSi7RWZXCyP5bJYqlnTvUnOaEv6BOIw9u4r4m+zoWq4SVRaxfNP8QJCfvy62D+Ui8IdQYbYTM0wxB2syioyeI7ksIGudjALYEcNuVIaoSjKl282LlyOZs7/zJXltcvrQstKkkOtQZsirvz+aqGMwhJXa3EPvlJcH6m1CjeX1zc55NW4AlVfgX5VuI39MVHIzuXe3Pbw3nI6OirXAM/btARQQQpVI4kNrQvwmb+occcWhRasWhnZFvnJ+ErzKAL3eYrTIP5W/JjGu0/l4UaIObCqDPuoK9ikck4CYwMAOgCmBHMxX4GLCcmewPWT+MPh/ZHI8DiX+bXziVDYJCNCxbTcCPDC/UpMOmcAQXz1/TR/DcCzIoeZ/1xnZthsER1S7RYMN9V1b4fjJY+GAkhwwtRYHGv1kFCBeZguO8uWMyfWceF+jzYINOgdY14RDC1RBYxRYGZMa/MFJf8crCBKVqM+Ah5laCia41Go0s7k7g/0qgab4K1LVMje0itIuZowz1JpzsSLLQC/Ku6N5fBcNcwI4ABU5YUCuYVNDY0UIV2SnsHjI8wknvAZgGe0OCtOhY9gvzjEvv2PlghQ9eOlzQ+2HYB38lQJ68MVdrcvQPGZisMPv5T8dfMRYLFuxBpcBwFlmBRIlhbk+/z758HO6aVLcetcU4uzL8BthU50vrDKmTCYAgebpkOsQAI4UAlUigyxP1JsONMnh/jD+ec00SBJZMoTrBKLgyWgNgw+MO3EKke6Djrl+RzYINGmRSUzBXSyfmqv/woGixOLrEV42DkRxsFVkyNLBhtH5MZyO3Mp8G4LshgLzwcJ0lqEYyeRoJpsYIVjSUw8r5RpcLByGPetkihSFr5PWADOixOVgO3M3SWLbcWi+WXwfJQ8EGWFZOO+2V1unzBr3SfBSM9WHpWwdIG7MJ1gGlLYEViHO6KbN/xH4if/j5YaA6ajGLTpKJ8TCMSrDGNCvds1nR1YPc0XDAwWsx+oYBYoWSw7ltgbfZyIIy20mPtQsFheyLB4g33EXXswvJnTEpaaIV8RQ+BVUNgRhDuaUIPk8+W1CPBSdUaGuiL5ah4nvOdoqQFqT0tVBhsi2zjEE57HU7Ot5jFFmA1tNBqdPQGWCMRp7LL7di56a8JK2mh9UODkCuypWvOsXaMCI4egLF0/d4wQu8sVjUOpgvDIDFPJy1nHvg5+l5R0mi+5/T7/QHbI4MxDyyzOYyKYDFm7IrO5unxPWhWXDQYWLbaxarSH485ux9YEWB8zgpj0O5L5diiDRk0D7LF5OJA/5iDsUUTfZ16af8Py0oi+gOa6OBs6VLc/bFlVyzn/AnXEqse9yYPE9h1JbAtTQzuZEYv6LYQDJSjoxlgTNoZKmQkMDZLlSkkYlVxqT9GFrYiCmYGyzEoAXZdCSxpCmWka8gCMNptqdKoAMkb7aENMlJIoulq7FPRYiXL+GCs8CX6SVpZujgHu64MltSLiN1q0KXv5jgMjJ2YpbGj67ftqGpGgMU9FR28NQtuXsCCNSswN4lVymXho6L5Bwvgp/SYf1U12x44g/45i2/GNhyG1/oafbJ1Qc4HaOOebHaNfCHQOWlK43+RpyzUMhMm+sjvaBmY8WN7cmTaksyy6mQDpgODqzRdx+mf/77xFpmNhWs0smWSe9DzDXKPLXJ7LvrSXLytGCj88vlPkbGKt6IrP3dqDGQmo9/e+aKK4Zfu1yzNyq9oCURe//jXV0Zl6o0Y40anebT3+PC4d03XZZUt8+MirATKqp7H6IXNRxdW0ZGFdKldWN8+ONcs3YxthcMH2kpuYWX07nllgOLDqs896RUSb5e2qNvnjZJmQjQm+kwB31PECeQi/PR+++vPP//7f2JepZI4krAImuuvE3Ta/e3Kn3/+hqVFFl/A0n5j+usvXFBcVND/gv7rbQkrmmvxcj3aqbDsRySdEpB/XDzx+aTCT+xdxfwqxJ639AveLjuGOvU6Ci/tX5ncL88xS2qGH6tLn5xTu5p7nvd/TVwHRTDbs7Fceqa/Sb65KfbF9fBJ3Mw2e3PUP9P1cIxKufRGtuff3N39qKzfp86VFyymwD+3NyY7U/jn8Q54QbcZgLmj5rjTqe/McWHdq4NOp3Nw5FLKVM1B4ys41b2qdzrjGvUF93K8A2TuwfjRJb9wBEcfdutcc//e8YJhip2RzTS6hrCBrnxUDwfImgC2x67Zdf3K3oHVXPwdDYCw2Tr5OjiDfZBoApiNEntw3py+jjgPFn0Fb4mhuMlw4erNWq1Zp4Vrun48Ie/KXApLB3cTKGU/jBNoDmBNz91DxFXdMW41XIz64NIDqSNE1hyGwToJdJRKXdmjvb3dcaK5u7cXePkKwESJCwWJha4lMAfcDmHT4PLX7JS9C88czsOthDdOHHgEDB94IFfKYN5lAj1ALpCi76HvUIdn3hHru6VLksI/cbcjVwRDdHedgaVSDj4BlxEc1sUO5jKwlL2TQCEwcIDgMQGY9GNxt9Bvc1G3jwDbSYw5mN3BZfXYe2wjhD8ZGAQD/EUCO0ogwUJhsJhbaEl7EpdNmpard8FwrTmyRywGuEDJwFK2k7iWwfCXgyASLYHFsLztLe3IbbHtRIN5TRweKBi86zq3r8huUk0ufTD8pWbLFhuLkWgJbGdlXPUQF01yZDAHN0XYQHvgcTXcBOLSe+51okPLekCJKVgT20cOHkj06zBYzKmHqNCLx2yBYMhirrvbwbGDRJAr3O4duPCsO+QkYLEFsLpssTmN+W+B7b1fuh/XpRw4+F/PkINHAqFEYuz6DTRuy2Swdyz2AVjMOZUveUF4yuNBakdqxzBY/QoSQWKxHUTarGsOJrki+RICu3oHLPY3gplqksE8vyrLmYeDU1xSOFLHPFzdHiGMO7ysQvDowBepjnVElLVZ7FFaDR6EqGYopeKeSqIi9reaDaGR1E9o1Hg7lnIhVMjhfiw+vSWwlbxjil1MCImuK7zwORaS4CUwXBrcX3PZYyGViDfQj0BrN2nThSkf4Uhn/e2Y2HSOxHcI0btguPg29TrqTCmeUnmEAuKKR9OQEYl7gV+EwWL9G0aC/B+xwy3lUgMtgIGRsF12CD4EeI9l95AE41pFWF3IYTo0TRlDl8iNAHNTq+Gi8cqNej83+HMGEWCQUrmQVNZseLOGd1ugP0N9wMEtnT1CBAJMNsadgXkEWOx//oHrwcPhbnQV8fJgEBZDYMTjmpDY46Qq0RmzjmYtgcY4GTugl+AjaMxfCCMxqdMB/iVXXNUrtPXmwTj0B7eZOsK4BOoEdR0Ri12hMbRqexgFkT4JCQKozvNp+wpK3GSNpL0HNckBJ7Cb6Fpo1VaYAr+pINVyhY4h2/Y/5nPW9YYdrjCQgo+kxEGfeUq6kgKvqnV+V6Fc6w29PYrovn2Icz2gnwGGPirXVxUeol2bLlc6Zrqiv2vxKT18yhl/TN5opYMd7wutisz15j8jHAo68uwPQ8B3U9neQxP9XC74s5TzGNlwimOnHi9X+XctPi9Uv350Pdt2Pw7fMgRpsrhgIsJLPVzt1Nf5f43xodC4tnP1kCIvF3p2hMgBLpuM9M7no9HoAevxcffqaOeyVo/j/b0VCXXG9YNms3Z5ebnDhDdrtWbz4OCgXh93Oh0YHFFSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUvqP0+Y/VIn0P1SJjX+oFNivpnfBWi3pG/v3a4iB9fC/0xO6fcc+N/Zvbw9P7/iZJ7PWxunt3cYvIgrWenpq7Q/3D/c39g/Tw5PW4eF+6zD9jDW9SR+m0xutdPpuE/8b9n5yeT8tZrGX4eHL62Txmp4sJq+Lu8ViMruZbc7S6em/boebm6e9zc3Ztx7+vFtz+SJ9f3knrjTkv/A/dA8DOxyeTKfT/en0KZ1+/X24kZ5Obs963zZfp4vTb+mn52936dN/bbbWXsVeJre9l9bJS2//tLXRG856h/jz5BWTnLZg6+Xw9mn48tybDE9v7obTp2FvOG2JYK2n2+Ht4mk66bUOh7/fnB0+vc5aZ+nW5mQx+zt99/e3szMM9rJ2sP3XyfRm8jp7vp1MnnvD3vN08jSc/T1NT56m08li8fo0meHN19dFbzE8W7zezF4XZyLYRut5cjJsnZ4uNl6enqa3G8PbWetmOgT325x+myz+nvS+zTbP1g42GU6ns+FsgXkWp0/DG0xyc/f8evqKeYbT17ub2xl2rpuX58Pnp8nwZnj69Lovg01fWqevk9bpcHL2lMbmPb1r3S5e9w9vZ78vng7PpsPTaXq6/tCBna13cnp3ctLDrjfD/3r7L3e4cIez/V7r5XSjh/cc9jbuXk5mOLSf3G30KFfQjoGX7bfIP/wfcrSFoyTsP2zB9kbr37sV25e//mdmHr+yFNivpv8HPjhvJc0VsGsAAAAASUVORK5CYII=',
        name: 'product #2',
        count: 8,
        size: {
            width: 210,
            height: 220
        },
        weight: '220g',
        comments: [Comment, Comment]
    },
    {
        id: 3,
        imageUrl: 'https://previews.123rf.com/images/vasilyrosca/vasilyrosca2004/vasilyrosca200400201/145426942-best-quality-price-tag-best-product-logo-badge-premium-quality.jpg',
        name: 'product #3',
        count: 0,
        size: {
            width: 230,
            height: 240
        },
        weight: '250g',
        comments: [Comment, Comment]
    },
    {
        id: 4,
        imageUrl: 'https://www.clipartkey.com/mpngs/m/22-223374_your-awesome-clipart-image-eco-friendly-product-logo.png',
        name: 'product #4',
        count: 12,
        size: {
            width: 250,
            height: 260
        },
        weight: '270g',
        comments: [Comment, Comment]
    },
    {
        id: 5,
        imageUrl: 'https://newarta.com/wp-content/uploads/2017/05/NEW-PRODUCT-free-label-1.jpg',
        name: 'product #5',
        count: 2,
        size: {
            width: 270,
            height: 280
        },
        weight: '290g',
        comments: [Comment, Comment]
    },
    {
        id: 6,
        imageUrl: 'https://images.template.net/wp-content/uploads/2017/03/20115720/Company-Product-Branding-Logo.jpg',
        name: 'product #6',
        count: 7,
        size: {
            width: 290,
            height: 300
        },
        weight: '310g',
        comments: [Comment, Comment]
    }, 
];

export default products;