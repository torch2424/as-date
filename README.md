# as-date

Staging AssemblyScript Date implementation by @LiaoPeng , as an installable AssemblyScript library.

This library builds upon @LiaoPeng 's work in [AssemblyScript/assemblyscript#357](https://github.com/AssemblyScript/assemblyscript/pull/357). By taking their changes, and moving into an installble AssemblyScript library. **This is a rough implementation of `Date` for AssemblyScript, and a more mature `Date` implementation will eventually be written and merged into the AssemblyScript Standard Library.**

## Similar Libraries

* [ColinEberhardt/assemblyscript-temporal](https://github.com/ColinEberhardt/assemblyscript-temporal) - A very experimental implementation of the TC39 temporal specification, for AssemblyScript.

## License

**TL;DR** This project is licensed under [GPLv2](./LICENSE).

This library builds on  @LiaoPeng 's work, which they mentioned is [based on the Java Standard Library Date](https://github.com/AssemblyScript/assemblyscript/pull/357#issuecomment-652409902). [@DcodeIO and I discussed](https://github.com/AssemblyScript/working-group/issues/56) that we should look into the License in Java to ensure that we can use the code in AssemblyScript (which is licensed under MIT).

Looking at the [AssemblyScript/assemblyscript#357](https://github.com/AssemblyScript/assemblyscript/pull/357), you will notice it does refer to Java's [util/Calendar.java](http://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/util/Calendar.java) (This link may eventually break), and states that the file is licensed under GPLv2. (Also looking through `time/`, everything seems to be licensed under GPLv2).

Looking through various discussions of porting, or creating derivative works, of other implementations ([1](https://stackoverflow.com/questions/10952689/code-ported-from-one-to-another-language-licensing), [2](https://softwareengineering.stackexchange.com/questions/266210/porting-an-algorithm-implementation-licensed-under-gnu-gpl-v3), [3](https://softwareengineering.stackexchange.com/questions/151515/rewrote-gnu-gpl-v2-code-in-another-language-can-i-change-a-license), [4](https://softwareengineering.stackexchange.com/questions/205180/what-licensing-implications-if-any-are-there-when-porting-code-from-one-langua), [5](https://softwareengineering.stackexchange.com/questions/86754/is-it-possible-to-rewrite-every-line-of-an-open-source-project-in-a-slightly-dif)), it seems like we should be preserving the license that this code was stated to have reffered to. There could be an argument that this could have been a "clean room" implementation, but it would probably be best to just make this library GPLv2! 

