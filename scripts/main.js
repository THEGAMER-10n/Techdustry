let script = Seq.with(
    "turrets/kronos"
);

script.each(scripts => {
    require(scripts)
});