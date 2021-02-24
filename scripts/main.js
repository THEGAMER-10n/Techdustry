let script = Seq.with(
    "turrets/kronos",
    "items",
);

script.each(scripts => {
    require(scripts)
});