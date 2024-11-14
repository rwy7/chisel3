"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[3117],{8176:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var t=a(4848),i=a(8453);const l={layout:"docs",title:"Interfaces and Connections",section:"chisel3"},s="Interfaces & Connections",o={id:"explanations/interfaces-and-connections",title:"Interfaces and Connections",description:"For more sophisticated modules it is often useful to define and instantiate interface classes while defining the IO for a module. First and foremost, interface classes promote reuse allowing users to capture once and for all common interfaces in a useful form.",source:"@site/docs/explanations/interfaces-and-connections.md",sourceDirName:"explanations",slug:"/explanations/interfaces-and-connections",permalink:"/docs/explanations/interfaces-and-connections",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/interfaces-and-connections.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Interfaces and Connections",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Instance Choices",permalink:"/docs/explanations/instchoice"},next:{title:"Intrinsics",permalink:"/docs/explanations/intrinsics"}},c={},r=[{value:"Ports: Subclasses &amp; Nesting",id:"ports-subclasses--nesting",level:2},{value:"Bundle Vectors",id:"bundle-vectors",level:2},{value:"Bulk Connections",id:"bulk-connections",level:2},{value:"<code>MonoConnect</code> Algorithm",id:"monoconnect-algorithm",level:3},{value:"<code>BiConnect</code> Algorithm",id:"biconnect-algorithm",level:3},{value:"The standard ready-valid interface (ReadyValidIO / Decoupled)",id:"the-standard-ready-valid-interface-readyvalidio--decoupled",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interfaces--connections",children:"Interfaces & Connections"})}),"\n",(0,t.jsx)(n.p,{children:"For more sophisticated modules it is often useful to define and instantiate interface classes while defining the IO for a module. First and foremost, interface classes promote reuse allowing users to capture once and for all common interfaces in a useful form."}),"\n",(0,t.jsx)(n.p,{children:"Secondly, interfaces allow users to dramatically reduce wiring by supporting bulk connections between producer and consumer modules. Finally, users can make changes in large interfaces in one place reducing the number of updates required when adding or removing pieces of the interface."}),"\n",(0,t.jsx)(n.p,{children:"Note that Chisel has some built-in standard interface which should be used whenever possible for interoperability (e.g. Decoupled)."}),"\n",(0,t.jsx)(n.h2,{id:"ports-subclasses--nesting",children:"Ports: Subclasses & Nesting"}),"\n",(0,t.jsx)(n.p,{children:"As we saw earlier, users can define their own interfaces by defining a class that subclasses Bundle. For example, a user could define a simple link for hand-shaking data as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"class SimpleLink extends Bundle {\n  val data = Output(UInt(16.W))\n  val valid = Output(Bool())\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"We can then extend SimpleLink by adding parity bits using bundle inheritance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"class PLink extends SimpleLink {\n  val parity = Output(UInt(5.W))\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"In general, users can organize their interfaces into hierarchies using inheritance."}),"\n",(0,t.jsx)(n.p,{children:"From there we can define a filter interface by nesting two PLinks into a new FilterIO bundle:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"class FilterIO extends Bundle {\n  val x = Flipped(new PLink)\n  val y = new PLink\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"where flip recursively changes the direction of a bundle, changing input to output and output to input."}),"\n",(0,t.jsx)(n.p,{children:"We can now define a filter by defining a filter class extending module:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"class Filter extends Module {\n  val io = IO(new FilterIO)\n  // ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"where the io field contains FilterIO."}),"\n",(0,t.jsx)(n.h2,{id:"bundle-vectors",children:"Bundle Vectors"}),"\n",(0,t.jsx)(n.p,{children:"Beyond single elements, vectors of elements form richer hierarchical interfaces. For example, in order to create a crossbar with a vector of inputs, producing a vector of outputs, and selected by a UInt input, we utilize the Vec constructor:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3.util.log2Ceil\nclass CrossbarIo(n: Int) extends Bundle {\n  val in = Vec(n, Flipped(new PLink))\n  val sel = Input(UInt(log2Ceil(n).W))\n  val out = Vec(n, new PLink)\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"where Vec takes a size as the first argument and a block returning a port as the second argument."}),"\n",(0,t.jsx)(n.h2,{id:"bulk-connections",children:"Bulk Connections"}),"\n",(0,t.jsxs)(n.p,{children:["Once we have a defined Interface, we can connect to it via a ",(0,t.jsx)(n.a,{href:"https://www.chisel-lang.org/api/latest/chisel3/Data.html#:=",children:(0,t.jsx)(n.code,{children:"MonoConnect"})})," operator (",(0,t.jsx)(n.code,{children:":="}),") or ",(0,t.jsx)(n.a,{href:"https://www.chisel-lang.org/api/latest/chisel3/Data.html#%3C%3E",children:(0,t.jsx)(n.code,{children:"BiConnect"})})," operator (",(0,t.jsx)(n.code,{children:"<>"}),")."]}),"\n",(0,t.jsxs)(n.h3,{id:"monoconnect-algorithm",children:[(0,t.jsx)(n.code,{children:"MonoConnect"})," Algorithm"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MonoConnect.connect"}),", or ",(0,t.jsx)(n.code,{children:":="}),", executes a mono-directional connection element-wise."]}),"\n",(0,t.jsx)(n.p,{children:"Note that this isn't commutative. There is an explicit source and sink\nalready determined before this function is called."}),"\n",(0,t.jsx)(n.p,{children:"The connect operation will recurse down the left Data (with the right Data).\nAn exception will be thrown if a movement through the left cannot be matched\nin the right. The right side is allowed to have extra fields.\nVecs must still be exactly the same size."}),"\n",(0,t.jsx)(n.p,{children:"Note that the LHS element must be writable so, one of these must hold:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Is an internal writable node (",(0,t.jsx)(n.code,{children:"Reg"})," or ",(0,t.jsx)(n.code,{children:"Wire"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Is an output of the current module"}),"\n",(0,t.jsx)(n.li,{children:"Is an input of a submodule of the current module"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note that the RHS element must be readable so, one of these must hold:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Is an internal readable node (",(0,t.jsx)(n.code,{children:"Reg"}),", ",(0,t.jsx)(n.code,{children:"Wire"}),", ",(0,t.jsx)(n.code,{children:"Op"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Is a literal"}),"\n",(0,t.jsx)(n.li,{children:"Is a port of the current module or submodule of the current module"}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"biconnect-algorithm",children:[(0,t.jsx)(n.code,{children:"BiConnect"})," Algorithm"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"BiConnect.connect"}),", or ",(0,t.jsx)(n.code,{children:"<>"}),", executes a bidirectional connection element-wise. Note that the arguments are left and right (not source and sink) so the intent is for the operation to be commutative. The connect operation will recurse down the left ",(0,t.jsx)(n.code,{children:"Data"})," (with the right ",(0,t.jsx)(n.code,{children:"Data"}),"). An exception will be thrown if a movement through the left cannot be matched in the right, or if the right side has extra fields."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: We highly encourage new code to be written with the ",(0,t.jsxs)(n.a,{href:"https://www.chisel-lang.org/chisel3/docs/explanations/connectable.html",children:[(0,t.jsx)(n.code,{children:"Connectable"})," Operators"]})," rather than the ",(0,t.jsx)(n.code,{children:"<>"})," operator."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Using the biconnect ",(0,t.jsx)(n.code,{children:"<>"})," operator, we can now compose two filters into a filter block as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"class Block extends Module {\n  val io = IO(new FilterIO)\n  val f1 = Module(new Filter)\n  val f2 = Module(new Filter)\n  f1.io.x <> io.x\n  f1.io.y <> f2.io.x\n  f2.io.y <> io.y\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The bidirectional bulk connection operator ",(0,t.jsx)(n.code,{children:"<>"})," connects leaf ports of the same name to each other. The Scala types of the Bundles are not required to match. If one named signal is missing from either side, Chisel will give an error such as in the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"\nclass NotReallyAFilterIO extends Bundle {\n  val x = Flipped(new PLink)\n  val y = new PLink\n  val z = Output(new Bool())\n}\nclass Block2 extends Module {\n  val io1 = IO(new FilterIO)\n  val io2 = IO(Flipped(new NotReallyAFilterIO))\n\n  io1 <> io2\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Below we can see the resulting error for this example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"emitSystemVerilog(new Block2)\n// chisel3.package$ChiselException: Connection between left (Block2.io1: IO[FilterIO]) and source (Block2.io2: IO[NotReallyAFilterIO]) failed @.z: Left Record missing field (z).\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$Block2.<init>(interfaces-and-connections.md:89)\n// \tat repl.MdocSession$MdocApp$$anonfun$22$$anonfun$apply$20.apply(interfaces-and-connections.md:97)\n// \tat repl.MdocSession$MdocApp$$anonfun$22$$anonfun$apply$20.apply(interfaces-and-connections.md:97)\n// \tat chisel3.ObjectModuleImpl.evaluate(ModuleImpl.scala:86)\n// \tat chisel3.ObjectModuleImpl.evaluate$(ModuleImpl.scala:52)\n// \tat chisel3.Module$.evaluate(Module.scala:10)\n// \tat chisel3.ObjectModuleImpl._applyImpl(ModuleImpl.scala:25)\n// \tat chisel3.ObjectModuleImpl._applyImpl$(ModuleImpl.scala:23)\n// \tat chisel3.Module$._applyImpl(Module.scala:10)\n// \tat chisel3.Module$.do_apply(Module.scala:22)\n// \tat chisel3.stage.phases.Elaborate.$anonfun$transform$2(Elaborate.scala:55)\n// \tat chisel3.internal.Builder$.$anonfun$buildImpl$1(Builder.scala:1083)\n// \tat scala.util.DynamicVariable.withValue(DynamicVariable.scala:59)\n// \tat chisel3.internal.Builder$.buildImpl(Builder.scala:1073)\n// \tat chisel3.internal.Builder$.$anonfun$build$1(Builder.scala:1065)\n// \tat logger.Logger$.$anonfun$makeScope$4(Logger.scala:148)\n// \tat scala.util.DynamicVariable.withValue(DynamicVariable.scala:59)\n// \tat logger.Logger$.makeScope(Logger.scala:146)\n// \tat logger.Logger$.makeScope(Logger.scala:133)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Bidirectional connections should only be used with ",(0,t.jsx)(n.strong,{children:"directioned elements"})," (like IOs), e.g. connecting two wires isn't supported since Chisel can't necessarily figure out the directions automatically.\nFor example, putting two temporary wires and connecting them here will not work, even though the directions could be known from the endpoints:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"\nclass BlockWithTemporaryWires extends Module {\n  val io = IO(new FilterIO)\n  val f1 = Module(new Filter)\n  val f2 = Module(new Filter)\n  f1.io.x <> io.x\n val tmp1 = Wire(new FilterIO)\n val tmp2 = Wire(new FilterIO)\n  f1.io.y <> tmp1\n  tmp1 <> tmp2\n  tmp2 <> f2.io.x\n  f2.io.y <> io.y\n}\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Below we can see the resulting error for this example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"emitSystemVerilog(new BlockWithTemporaryWires)\n// chisel3.package$ChiselException: Connection between left (Filter.io.y: IO[PLink]) and source (BlockWithTemporaryWires.tmp1: Wire[FilterIO]) failed @.y: Left Record missing field (y).\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$BlockWithTemporaryWires.<init>(interfaces-and-connections.md:113)\n// \tat repl.MdocSession$MdocApp$$anonfun$33$$anonfun$apply$29.apply(interfaces-and-connections.md:124)\n// \tat repl.MdocSession$MdocApp$$anonfun$33$$anonfun$apply$29.apply(interfaces-and-connections.md:124)\n// \tat chisel3.ObjectModuleImpl.evaluate(ModuleImpl.scala:86)\n// \tat chisel3.ObjectModuleImpl.evaluate$(ModuleImpl.scala:52)\n// \tat chisel3.Module$.evaluate(Module.scala:10)\n// \tat chisel3.ObjectModuleImpl._applyImpl(ModuleImpl.scala:25)\n// \tat chisel3.ObjectModuleImpl._applyImpl$(ModuleImpl.scala:23)\n// \tat chisel3.Module$._applyImpl(Module.scala:10)\n// \tat chisel3.Module$.do_apply(Module.scala:22)\n// \tat chisel3.stage.phases.Elaborate.$anonfun$transform$2(Elaborate.scala:55)\n// \tat chisel3.internal.Builder$.$anonfun$buildImpl$1(Builder.scala:1083)\n// \tat scala.util.DynamicVariable.withValue(DynamicVariable.scala:59)\n// \tat chisel3.internal.Builder$.buildImpl(Builder.scala:1073)\n// \tat chisel3.internal.Builder$.$anonfun$build$1(Builder.scala:1065)\n// \tat logger.Logger$.$anonfun$makeScope$4(Logger.scala:148)\n// \tat scala.util.DynamicVariable.withValue(DynamicVariable.scala:59)\n// \tat logger.Logger$.makeScope(Logger.scala:146)\n// \tat logger.Logger$.makeScope(Logger.scala:133)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more details and information, see ",(0,t.jsx)(n.a,{href:"connection-operators",children:"Deep Dive into Connection Operators"})]}),"\n",(0,t.jsxs)(n.p,{children:["NOTE: When using ",(0,t.jsx)(n.code,{children:"Chisel._"})," (compatibility mode) instead of ",(0,t.jsx)(n.code,{children:"chisel3._"}),", the ",(0,t.jsx)(n.code,{children:":="})," operator works in a bidirectional fashion similar to ",(0,t.jsx)(n.code,{children:"<>"}),", but not exactly the same."]}),"\n",(0,t.jsx)(n.h2,{id:"the-standard-ready-valid-interface-readyvalidio--decoupled",children:"The standard ready-valid interface (ReadyValidIO / Decoupled)"}),"\n",(0,t.jsxs)(n.p,{children:["Chisel provides a standard interface for ",(0,t.jsx)(n.a,{href:"http://inst.eecs.berkeley.edu/~cs150/Documents/Interfaces.pdf",children:"ready-valid interfaces"}),".\nA ready-valid interface consists of a ",(0,t.jsx)(n.code,{children:"ready"})," signal, a ",(0,t.jsx)(n.code,{children:"valid"})," signal, and some data stored in ",(0,t.jsx)(n.code,{children:"bits"}),".\nThe ",(0,t.jsx)(n.code,{children:"ready"})," bit indicates that a consumer is ",(0,t.jsx)(n.em,{children:"ready"})," to consume data.\nThe ",(0,t.jsx)(n.code,{children:"valid"})," bit indicates that a producer has ",(0,t.jsx)(n.em,{children:"valid"})," data on ",(0,t.jsx)(n.code,{children:"bits"}),".\nWhen both ",(0,t.jsx)(n.code,{children:"ready"})," and ",(0,t.jsx)(n.code,{children:"valid"})," are asserted, a data transfer from the producer to the consumer takes place.\nA convenience method ",(0,t.jsx)(n.code,{children:"fire"})," is provided that is asserted if both ",(0,t.jsx)(n.code,{children:"ready"})," and ",(0,t.jsx)(n.code,{children:"valid"})," are asserted."]}),"\n",(0,t.jsxs)(n.p,{children:["Usually, we use the utility function ",(0,t.jsx)(n.a,{href:"https://chisel.eecs.berkeley.edu/api/latest/chisel3/util/Decoupled$.html",children:(0,t.jsx)(n.code,{children:"Decoupled()"})})," to turn any type into a ready-valid interface rather than directly using ",(0,t.jsx)(n.a,{href:"http://chisel.eecs.berkeley.edu/api/latest/chisel3/util/ReadyValidIO.html",children:"ReadyValidIO"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Decoupled(...)"})," creates a producer / output ready-valid interface (i.e. bits is an output)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Flipped(Decoupled(...))"})," creates a consumer / input ready-valid interface (i.e. bits is an input)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Take a look at the following example Chisel code to better understand exactly what is generated:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.util.Decoupled\n\n/**\n  * Using Decoupled(...) creates a producer interface.\n  * i.e. it has bits as an output.\n  * This produces the following ports:\n  *   input         io_readyValid_ready,\n  *   output        io_readyValid_valid,\n  *   output [31:0] io_readyValid_bits\n  */\nclass ProducingData extends Module {\n  val io = IO(new Bundle {\n    val readyValid = Decoupled(UInt(32.W))\n  })\n  // do something with io.readyValid.ready\n  io.readyValid.valid := true.B\n  io.readyValid.bits := 5.U\n}\n\n/**\n  * Using Flipped(Decoupled(...)) creates a consumer interface.\n  * i.e. it has bits as an input.\n  * This produces the following ports:\n  *   output        io_readyValid_ready,\n  *   input         io_readyValid_valid,\n  *   input  [31:0] io_readyValid_bits\n  */\nclass ConsumingData extends Module {\n  val io = IO(new Bundle {\n    val readyValid = Flipped(Decoupled(UInt(32.W)))\n  })\n  io.readyValid.ready := false.B\n  // do something with io.readyValid.valid\n  // do something with io.readyValid.bits\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DecoupledIO"})," is a ready-valid interface with the ",(0,t.jsx)(n.em,{children:"convention"})," that there are no guarantees placed on deasserting ",(0,t.jsx)(n.code,{children:"ready"})," or ",(0,t.jsx)(n.code,{children:"valid"})," or on the stability of ",(0,t.jsx)(n.code,{children:"bits"}),".\nThat means ",(0,t.jsx)(n.code,{children:"ready"})," and ",(0,t.jsx)(n.code,{children:"valid"})," can also be deasserted without a data transfer."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"IrrevocableIO"})," is a ready-valid interface with the ",(0,t.jsx)(n.em,{children:"convention"})," that the value of ",(0,t.jsx)(n.code,{children:"bits"})," will not change while ",(0,t.jsx)(n.code,{children:"valid"})," is asserted and ",(0,t.jsx)(n.code,{children:"ready"})," is deasserted.\nAlso, the consumer shall keep ",(0,t.jsx)(n.code,{children:"ready"})," asserted after a cycle where ",(0,t.jsx)(n.code,{children:"ready"})," was high and ",(0,t.jsx)(n.code,{children:"valid"})," was low.\nNote that the ",(0,t.jsx)(n.em,{children:"irrevocable"})," constraint ",(0,t.jsx)(n.em,{children:"is only a convention"})," and cannot be enforced by the interface.\nChisel does not automatically generate checkers or assertions to enforce the ",(0,t.jsx)(n.em,{children:"irrevocable"})," convention."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(6540);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);