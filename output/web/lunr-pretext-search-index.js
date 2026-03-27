var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and functions",
  "body": " Sets and functions    We gather here some notions about sets and functions.    Sets   Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .     The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.   With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .     Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .     Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set intersection       set difference     set complement    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .       With the help of these set operations, we can now describe some common sets used in mathematics.   Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .    The power set of a set is the set of all subsets of .   Power set  power set    power set of    Given a set , its power set  is defined as the set of all subsets of .     Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .      Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function      Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   As with sets, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .     Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.       Tuples and Cartesian product  Next we introduce the notion of a tuple , which will both provide a rigorous foundation for the notion of an ordered sequence (or list), and vastly generalize that notion. Interestingly, as revealed in the next definition, a tuple is just a function by another name.   Tuple  tuple arbitrary    tuple indexed by    Let and be sets. An -valued tuple indexed by is a function . We call the indexing set of the tuple , and for all , we call the -th entry (or coordinate ) of . Furthermore, we will write to denote the function defined as for all .     Tuple versus function  As mentioned above, the introduction of tuple language and notation simply gives us another way of conceptualizing a function : one that let's us think of a function as a sort of sequence. Being able to fluently move between these two conceptions requires a little bit of practice. The following correspondence diagram can help in this regard:   Correspondence between functions and tuples   Correspondence between functions and tuples       Tuple equality  Fix a set , and let and be two tuples with entries in . When are these tuples equal? The answer is provided by our definition of function equality . By definition, the functions and are equal if and only if (i) (the indexing sets are equal), and (ii) for all . In terms of our tuple notation this means if and only if for all : , two tuples with the same indexing set are equal if and only if their -th coordinate is equal for all . Sound familiar? This is precisely how we define equality between two finite (ordered)sequences and . We make this observation more official in the next definition.    -tuples   Let be a set. An -tuple (or sequence of length ) with entries in is a tuple indexed by the set . We write or to denote the -tuple whose -th entry is for all .     We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.    Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.   The last definition indicates how our notion of tuple generalizes that of a finite sequence. As the next example illustrates, infinite sequences can also be considered as simply a particular type of tuple: one with indexing set .   Infinite sequence   Let be a set. An infinite sequence with entries in is a tuple of the form , for some . We write or to denote the tuple whose -th entry is for all .     Indexed collection of sets  In mathematics we often deal with indexed collections of sets: that is, a collection of sets indexed by some set . When all of the sets are subsets of a common set , we can make this notion rigorous with the concept of a tuple: namely, a collection of subsets of indexed by is just a tuple , where each is a subset of . More technically, this is just a function from to the power set of .    Cartesian product  Cartesian product    Cartesian product of the sets     -fold Cartesian product of     Cartesian product    Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  When for all , we denote as .  Additionally, in the special case where we write and , and we call the -fold Cartesian product of .  Lastly, in the special case where we write and .      Cardinality and countability   Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.   Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.        "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": " The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.  "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": " Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .  "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set intersection       set difference     set complement    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .   "
},
{
  "id": "d_power_set",
  "level": "2",
  "url": "s_sets_functions.html#d_power_set",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Power set.",
  "body": " Power set  power set    power set of    Given a set , its power set  is defined as the set of all subsets of .   "
},
{
  "id": "eg_power_set",
  "level": "2",
  "url": "s_sets_functions.html#eg_power_set",
  "type": "Example",
  "number": "0.1.11",
  "title": "Power set.",
  "body": " Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .   "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_sets_functions.html#d_function",
  "type": "Definition",
  "number": "0.1.12",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "ss_functions-3",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-3",
  "type": "Example",
  "number": "0.1.13",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "eg_addition_mult_as_functions",
  "level": "2",
  "url": "s_sets_functions.html#eg_addition_mult_as_functions",
  "type": "Example",
  "number": "0.1.14",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_sets_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.1.15",
  "title": "",
  "body": " Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .  "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.1.16",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_sets_functions.html#d_image",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_preimage_of_set",
  "level": "2",
  "url": "s_sets_functions.html#d_preimage_of_set",
  "type": "Definition",
  "number": "0.1.18",
  "title": "Preimage of set.",
  "body": " Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_sets_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.1.19",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "ss_functions-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-11",
  "type": "Example",
  "number": "0.1.20",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_sets_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.1.21",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_sets_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.1.22",
  "title": "Identity and inverse functions.",
  "body": " Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .   "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_sets_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.1.23",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_sets_functions.html#d_Ituple",
  "type": "Definition",
  "number": "0.1.24",
  "title": "Tuple.",
  "body": " Tuple  tuple arbitrary    tuple indexed by    Let and be sets. An -valued tuple indexed by is a function . We call the indexing set of the tuple , and for all , we call the -th entry (or coordinate ) of . Furthermore, we will write to denote the function defined as for all .   "
},
{
  "id": "rm_tuple_function",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_function",
  "type": "Remark",
  "number": "0.1.25",
  "title": "Tuple versus function.",
  "body": " Tuple versus function  As mentioned above, the introduction of tuple language and notation simply gives us another way of conceptualizing a function : one that let's us think of a function as a sort of sequence. Being able to fluently move between these two conceptions requires a little bit of practice. The following correspondence diagram can help in this regard:   Correspondence between functions and tuples   Correspondence between functions and tuples     "
},
{
  "id": "ss_tuples_cart_prod-5",
  "level": "2",
  "url": "s_sets_functions.html#ss_tuples_cart_prod-5",
  "type": "Remark",
  "number": "0.1.27",
  "title": "Tuple equality.",
  "body": " Tuple equality  Fix a set , and let and be two tuples with entries in . When are these tuples equal? The answer is provided by our definition of function equality . By definition, the functions and are equal if and only if (i) (the indexing sets are equal), and (ii) for all . In terms of our tuple notation this means if and only if for all : , two tuples with the same indexing set are equal if and only if their -th coordinate is equal for all . Sound familiar? This is precisely how we define equality between two finite (ordered)sequences and . We make this observation more official in the next definition.  "
},
{
  "id": "d_ntuple",
  "level": "2",
  "url": "s_sets_functions.html#d_ntuple",
  "type": "Definition",
  "number": "0.1.28",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " -tuples   Let be a set. An -tuple (or sequence of length ) with entries in is a tuple indexed by the set . We write or to denote the -tuple whose -th entry is for all .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_sets_functions.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.1.29",
  "title": "",
  "body": " We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.  "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.1.30",
  "title": "",
  "body": " Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  "
},
{
  "id": "d_infinite_sequence",
  "level": "2",
  "url": "s_sets_functions.html#d_infinite_sequence",
  "type": "Definition",
  "number": "0.1.31",
  "title": "Infinite sequence.",
  "body": " Infinite sequence   Let be a set. An infinite sequence with entries in is a tuple of the form , for some . We write or to denote the tuple whose -th entry is for all .   "
},
{
  "id": "ss_tuples_cart_prod-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_tuples_cart_prod-11",
  "type": "Remark",
  "number": "0.1.32",
  "title": "Indexed collection of sets.",
  "body": " Indexed collection of sets  In mathematics we often deal with indexed collections of sets: that is, a collection of sets indexed by some set . When all of the sets are subsets of a common set , we can make this notion rigorous with the concept of a tuple: namely, a collection of subsets of indexed by is just a tuple , where each is a subset of . More technically, this is just a function from to the power set of .  "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.1.33",
  "title": "Cartesian product.",
  "body": " Cartesian product  Cartesian product    Cartesian product of the sets     -fold Cartesian product of     Cartesian product    Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  When for all , we denote as .  Additionally, in the special case where we write and , and we call the -fold Cartesian product of .  Lastly, in the special case where we write and .   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_functions.html#d_cardinality",
  "type": "Definition",
  "number": "0.1.34",
  "title": "Cardinality.",
  "body": " Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.   Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.      "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.   Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.2.2",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.2.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.2.5",
  "title": "Logical quantifiers.",
  "body": " Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.2.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.2.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.2.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.2.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.2.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.3",
  "title": "Proof techniques",
  "body": " Proof techniques   Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.    Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)   The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )     Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence  The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)    Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).   It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction  The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.   Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .     Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.      Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities  Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .   Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  By , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .   By The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .    Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.    Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case 2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.3.1",
  "title": "",
  "body": " The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )  "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.3.2",
  "title": "",
  "body": " It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.  "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.3.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.3.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.3.5",
  "title": "",
  "body": " Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.  "
},
{
  "id": "sss_chain_equalities-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-3",
  "type": "Warning",
  "number": "0.3.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-2-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-4-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.3.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.  "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.3.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.3.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.3.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case 2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_mod_rings",
  "level": "1",
  "url": "s_mod_rings.html",
  "type": "Section",
  "number": "1.1",
  "title": "Integers modulo <span class=\"process-math\">\\(n\\)<\/span>",
  "body": " Integers modulo     Investigate the arithmetic of .    Investigate the multiplicative units .    Define the multiplicative order of an element and derive some of its basic properties.      Congruence classes  Recall the fundamental notion of congruence: two integers and are congruent modulo the positive integer , denoted , if one of the following equivalent conditions holds:    ;     for some ;     and have the same remainder upon division by .   Much of the content of the last quarter of this course involved statements about the integers that involved a congruence relation. For example, Fermat's little theorem asserts that for all integers that are relatively prime to . In this section we will recast much of the theory congruences in terms of a new finite number system that is related to, but distinct from the integers. The objectives for doing this are twofold.   This will give us an opportunity to review some of the important definitions and results related to congruences.    By shifting our language from congruence relations in to the arithmetic of , we hope to make the theory of congruences more concrete, to connect it more tangibly to the algebra of certain important number systems closely related to .   The semantic shift to also has the advantage of streamlining our statements about congruences, and replacing the somewhat abstract congruence relation with honest to goodness equality . For example, in our new setting, Fermat's little theorem reads as follows: for all , . (We will define shortly.) The small cost for this streamlining is the actual objects of the set are somewhat abstract: instead of integers, they are certain sets of integers that we now define.   Congruence classes    the congruence class of modulo     Let be a positive integer. The congruence class (or residue class ) of an integer modulo , denoted (or ) is the set of all integers congruent to modulo : , . Elements of a congruence class are called representatives (or residues ) of that class.  The set of all congruence classes modulo is denoted : , . The integer in all the settings above is called a modulus .     Congruence modulo   Consider the modulus .   Compute and .   Find a finite list of integers such that .   Compute .          We have .    It is not difficult to show that for any we have for some . (See theory below more generally.) Thus .    The sets are clearly all distinct from one another. Thus .        Congruence classes  The notation is ambiguous since it does not indicate the modulus in question. This is one reason for the alternative notation . Furthermore, the notation somehow does a better job of reminding us that a congruence class is not itself an integer, but rather a set of integers .  We will use both notations interchangeably. Typically, we will favor when performing modular arithmetic (see below), and when asserting something about sets.  When the context is absolutely clear, we will sometimes discard even more notation and refer to the congruence class in simply as .   The congruence modulo relation is what is called an equivalence relation . In other words, it satisfies the following three properties.   Reflexivity   for all .    Reflexivity  If , then .    Transitivity  If and , then .   Furthermore, the congruence classes modulo are called the equivalence classes of this equivalence relation. It is a basic fact about equivalence relations that their corresponding equivalence classes form a partition of the underlying set. (This is one of the topics of elementary set theory, which you can learn about in Math 300-0.) The following theorem makes this official in the case of congruence classes.   Congruence classes   Fix a modulus .   The following statements are equivalent.    .     .     .       The congruence classes modulo form a partition of . In more detail, we have , and if , then .    Given any , writing with as in the division algorithm, we have . Furthermore, for any .  As a result, we have and .       The theorem is a consequence of properties of the congruence relation learned earlier, and general properties about equivalence relations.     Least residue modulo   Fix a positive modulus . Given an integer the least residue of modulo , denoted is the unique satisfying .     Congruence relation and least residues  Do not confuse the two quite similar looking notations and . The first asserts that a certain relation holds, namely that is congruent to modulo . The second denotes the unique integer in that is congruent to modulo .  Said differently, the notion of the least residue defines a function .    Least residues  Although the least residue description is the most common way of enumerating the elements of , it is not the only one. For example, here are some alternative descriptions of : . Indeed, we obtain these different descriptions simply by choosing a different representative (or name , if you will) of the congruence classes of .    Complete residue system   Let be a positive integer. A complete residue system modulo is a set of integers such that for all and .      Ring structure of  So far we have only given a description of the set . We now define two operations on , modular addition and modular multiplication that turn this finite set into a full blown number system within which we can arithmetic and algebra very much like we do in , with some very important differences.  The good news is that our modular addition and multiplication operations are defined directly in terms of integer addition and multiplication. Recall that if integers satisfy , then we have . As a result, it follows from this that . This in turn guarantees that the following definitions of addition and multiplication of congruence classes are well-defined, in the sense that they do not depend on the choice of representatives: . The set together with these two operations is called the ring of integers modulo . A ring is a technical concept you learn about in the Math 330\/331 sequences. For us, it will simply mean a number system with two operations that behave very much like how addition and multiplication behave in .   Ring of integers modulo   Let be a positive integer. The set together with the modular addition operation and modular multiplication operations is called the ring of integers modulo .  When the context is clear, we will write and . Additionally, for any , we will write .    Simplifying arithmetic expressions in proceeds in much the same manner as simplifying a congruence statement in , but in a more streamlined way. The fact that our operations do not depend on our choice of representatives and can be exploited by choosing the representatives that make our life as easy as possible! The next examples illustrate this.   Modular arithmetic   Fix the modulus . Find a representative for the congruence class .         Least residue   Let and let . Compute .          Units modulo  As mentioned above, though for the most part arithmetic and algebra in the modular ring proceeds in much the same manner as in , there are some important differences. Here is one: recall that in , if for integers and , then either or . This is not true in . For example: we have , and yet and . As a consequence we cannot in general cancel nonzero factors in equations in . In other words we do not have an algebra rule equivalent to the following integer property: . One of the motivations for singling out the modular units in , as defined below, is that these can be cancelled in equations.   Multiplicative units in   Fix a modulus . An element is a unit (or (multiplicatively) invertible ) if there is an element satisfying . The element in this case is called the multiplicative inverse of , denoted . The set of all units of is denoted : , .     Modulus   Compute group tables for both and . Naturally, for the latter you should first determine the units of .         Units modulo      Find all units of by trial and error, using . That is for each either provide an inverse of , or show that no inverse exists.    Make a multiplication table for .            Units modulo   Let be a positive integer.   An element is a unit if and only if . In other words: . As a result, , where is the Euler totient function.    Assume is relatively prime to . Given integers and satisfying , as guaranteed by the Euclidean algorithm, we have .    If , then . In other words, is closed under multiplication .    If , then for all . In other words, invertible elements of can be cancelled multiplicatively.          Assume , and let . By definition, there is an element such that . By , this implies , or equivalently, for some . But then we have . Since divides and , we have , and thus . Thus if is a unit, then .  For the other direction assume . From the Euclidean algorithm, we know there are integers and such that . But then , or equivalently, . We conclude that .  We conclude that , as desired. Furthermore, taking our representatives to be least positive residues, we see that , from which it follows immediately from the definition of the Euler totient function and that .    As we saw in the previous argument, if , then , and thus .    This follows from (1) and the fact that if and are both relatively prime to , then so is .    The implication is clear. For the other direction, we have .        Units modulo   Let be a prime integer. All nonzero elements of are invertible: , .    As makes clear, modular rings with prime modulus are special for the following reason: every nonzero element of is invertible: this is because for all . In this respect the rings bear a striking resemblance to number systems like and (and ). In general a number system (or ring) for which all nonzero elements have a multiplicative inverse is called a field . Thus the family of rings , where is a prime integer, gives us a family of finite fields. To highlight this special property, we will denote .   Finite fields   Let be a prime integer. Since is a field (all nonzero elements are invertible), we will write for .     Sage examples  Here are some Sage cells to play with.     Integers modulo   There two different ways for doing modular arithmetic in SageMath that mirror our two ways of dealing with congruences. If you want to stay in the realm of the integers, the command a%n returns the least residue of modulo .   Alternatively, if you want to work within one of our modular rings, you can use the command R=Integers(n) to create the ring with name .   To take an integer and get its corresponding congruence class , use the coercing method R(a) . (Note: the cell below assumes you have evaluated the cell above that defines R=Integers(7) .)   Sage is built on Python, and as such any object you create ( , R or a ) has built-in methods that can be applied to it. You can get a list of these methods by using dir() command. To get to the good stuff, scroll down beyond all the names with underscores. For example, you will notice by running dir(R) that our modular ring has methods cardinality , is_field , and . Let's see what these do.    Similarly, dir(a) reveals that our ring element a has methods is_unit and inverse .    Let's try this same routine with a different ring.      "
},
{
  "id": "s_mod_rings-2",
  "level": "2",
  "url": "s_mod_rings.html#s_mod_rings-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Investigate the arithmetic of .    Investigate the multiplicative units .    Define the multiplicative order of an element and derive some of its basic properties.    "
},
{
  "id": "d_cong_classes",
  "level": "2",
  "url": "s_mod_rings.html#d_cong_classes",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Congruence classes.",
  "body": " Congruence classes    the congruence class of modulo     Let be a positive integer. The congruence class (or residue class ) of an integer modulo , denoted (or ) is the set of all integers congruent to modulo : , . Elements of a congruence class are called representatives (or residues ) of that class.  The set of all congruence classes modulo is denoted : , . The integer in all the settings above is called a modulus .   "
},
{
  "id": "eg_cong_mod_3",
  "level": "2",
  "url": "s_mod_rings.html#eg_cong_mod_3",
  "type": "Example",
  "number": "1.1.2",
  "title": "Congruence modulo <span class=\"process-math\">\\(3\\)<\/span>.",
  "body": " Congruence modulo   Consider the modulus .   Compute and .   Find a finite list of integers such that .   Compute .          We have .    It is not difficult to show that for any we have for some . (See theory below more generally.) Thus .    The sets are clearly all distinct from one another. Thus .      "
},
{
  "id": "ss_cong-5",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-5",
  "type": "Remark",
  "number": "1.1.3",
  "title": "Congruence classes.",
  "body": " Congruence classes  The notation is ambiguous since it does not indicate the modulus in question. This is one reason for the alternative notation . Furthermore, the notation somehow does a better job of reminding us that a congruence class is not itself an integer, but rather a set of integers .  We will use both notations interchangeably. Typically, we will favor when performing modular arithmetic (see below), and when asserting something about sets.  When the context is absolutely clear, we will sometimes discard even more notation and refer to the congruence class in simply as .  "
},
{
  "id": "th_cong_class",
  "level": "2",
  "url": "s_mod_rings.html#th_cong_class",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "Congruence classes.",
  "body": " Congruence classes   Fix a modulus .   The following statements are equivalent.    .     .     .       The congruence classes modulo form a partition of . In more detail, we have , and if , then .    Given any , writing with as in the division algorithm, we have . Furthermore, for any .  As a result, we have and .       The theorem is a consequence of properties of the congruence relation learned earlier, and general properties about equivalence relations.   "
},
{
  "id": "d_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#d_least_residue",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Least residue modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Least residue modulo   Fix a positive modulus . Given an integer the least residue of modulo , denoted is the unique satisfying .   "
},
{
  "id": "ss_cong-9",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-9",
  "type": "Warning",
  "number": "1.1.6",
  "title": "Congruence relation and least residues.",
  "body": " Congruence relation and least residues  Do not confuse the two quite similar looking notations and . The first asserts that a certain relation holds, namely that is congruent to modulo . The second denotes the unique integer in that is congruent to modulo .  Said differently, the notion of the least residue defines a function .  "
},
{
  "id": "ss_cong-10",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-10",
  "type": "Remark",
  "number": "1.1.7",
  "title": "Least residues.",
  "body": " Least residues  Although the least residue description is the most common way of enumerating the elements of , it is not the only one. For example, here are some alternative descriptions of : . Indeed, we obtain these different descriptions simply by choosing a different representative (or name , if you will) of the congruence classes of .  "
},
{
  "id": "d_complete_residue_system",
  "level": "2",
  "url": "s_mod_rings.html#d_complete_residue_system",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Complete residue system.",
  "body": " Complete residue system   Let be a positive integer. A complete residue system modulo is a set of integers such that for all and .   "
},
{
  "id": "d_int_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#d_int_mod_n",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Ring of integers modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Ring of integers modulo   Let be a positive integer. The set together with the modular addition operation and modular multiplication operations is called the ring of integers modulo .  When the context is clear, we will write and . Additionally, for any , we will write .   "
},
{
  "id": "eg_mod_arith",
  "level": "2",
  "url": "s_mod_rings.html#eg_mod_arith",
  "type": "Example",
  "number": "1.1.10",
  "title": "Modular arithmetic.",
  "body": " Modular arithmetic   Fix the modulus . Find a representative for the congruence class .       "
},
{
  "id": "eg_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#eg_least_residue",
  "type": "Example",
  "number": "1.1.11",
  "title": "Least residue.",
  "body": " Least residue   Let and let . Compute .       "
},
{
  "id": "d_units_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#d_units_mod_n",
  "type": "Definition",
  "number": "1.1.12",
  "title": "Multiplicative units in <span class=\"process-math\">\\(\\Z\/n\\Z\\)<\/span>.",
  "body": " Multiplicative units in   Fix a modulus . An element is a unit (or (multiplicatively) invertible ) if there is an element satisfying . The element in this case is called the multiplicative inverse of , denoted . The set of all units of is denoted : , .   "
},
{
  "id": "eg_mod_groups",
  "level": "2",
  "url": "s_mod_rings.html#eg_mod_groups",
  "type": "Example",
  "number": "1.1.13",
  "title": "Modulus <span class=\"process-math\">\\(n=5\\)<\/span>.",
  "body": " Modulus   Compute group tables for both and . Naturally, for the latter you should first determine the units of .       "
},
{
  "id": "eg_units_mod_12",
  "level": "2",
  "url": "s_mod_rings.html#eg_units_mod_12",
  "type": "Example",
  "number": "1.1.14",
  "title": "Units modulo <span class=\"process-math\">\\(12\\)<\/span>.",
  "body": " Units modulo      Find all units of by trial and error, using . That is for each either provide an inverse of , or show that no inverse exists.    Make a multiplication table for .          "
},
{
  "id": "th_units_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#th_units_mod_n",
  "type": "Theorem",
  "number": "1.1.15",
  "title": "Units modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Units modulo   Let be a positive integer.   An element is a unit if and only if . In other words: . As a result, , where is the Euler totient function.    Assume is relatively prime to . Given integers and satisfying , as guaranteed by the Euclidean algorithm, we have .    If , then . In other words, is closed under multiplication .    If , then for all . In other words, invertible elements of can be cancelled multiplicatively.          Assume , and let . By definition, there is an element such that . By , this implies , or equivalently, for some . But then we have . Since divides and , we have , and thus . Thus if is a unit, then .  For the other direction assume . From the Euclidean algorithm, we know there are integers and such that . But then , or equivalently, . We conclude that .  We conclude that , as desired. Furthermore, taking our representatives to be least positive residues, we see that , from which it follows immediately from the definition of the Euler totient function and that .    As we saw in the previous argument, if , then , and thus .    This follows from (1) and the fact that if and are both relatively prime to , then so is .    The implication is clear. For the other direction, we have .      "
},
{
  "id": "cor_units_mod_p",
  "level": "2",
  "url": "s_mod_rings.html#cor_units_mod_p",
  "type": "Corollary",
  "number": "1.1.16",
  "title": "Units modulo <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " Units modulo   Let be a prime integer. All nonzero elements of are invertible: , .   "
},
{
  "id": "ss_mult_units_mod_n-9",
  "level": "2",
  "url": "s_mod_rings.html#ss_mult_units_mod_n-9",
  "type": "Notation",
  "number": "1.1.17",
  "title": "Finite fields <span class=\"process-math\">\\(\\F_p\\)<\/span>.",
  "body": " Finite fields   Let be a prime integer. Since is a field (all nonzero elements are invertible), we will write for .  "
},
{
  "id": "eg_sage_integers_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#eg_sage_integers_mod_n",
  "type": "Sage example",
  "number": "1",
  "title": "Integers modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Integers modulo   There two different ways for doing modular arithmetic in SageMath that mirror our two ways of dealing with congruences. If you want to stay in the realm of the integers, the command a%n returns the least residue of modulo .   Alternatively, if you want to work within one of our modular rings, you can use the command R=Integers(n) to create the ring with name .   To take an integer and get its corresponding congruence class , use the coercing method R(a) . (Note: the cell below assumes you have evaluated the cell above that defines R=Integers(7) .)   Sage is built on Python, and as such any object you create ( , R or a ) has built-in methods that can be applied to it. You can get a list of these methods by using dir() command. To get to the good stuff, scroll down beyond all the names with underscores. For example, you will notice by running dir(R) that our modular ring has methods cardinality , is_field , and . Let's see what these do.    Similarly, dir(a) reveals that our ring element a has methods is_unit and inverse .    Let's try this same routine with a different ring.    "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "D",
  "title": "Examples and Sage cells",
  "body": " Examples and Sage cells   "
},
{
  "id": "appendix-vids",
  "level": "1",
  "url": "appendix-vids.html",
  "type": "Appendix",
  "number": "E",
  "title": "Mantras and fiats",
  "body": " Mantras and fiats   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
