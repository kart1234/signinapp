package com.demo;

import jdk.nashorn.api.scripting.NashornScriptEngine;

import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

public class React {

    private ThreadLocal<NashornScriptEngine> engineHolder = new ThreadLocal<NashornScriptEngine>() {
        @Override
        protected NashornScriptEngine initialValue() {
            NashornScriptEngine nashornScriptEngine = (NashornScriptEngine) new ScriptEngineManager().getEngineByName("nashorn");
            try {
                nashornScriptEngine.eval(read("static/nashorn-polyfill.js"));
                nashornScriptEngine.eval(read("static/vendor/react.js"));
                nashornScriptEngine.eval(read("static/vendor/formsy-react.js"));
                nashornScriptEngine.eval(read("static/login.js"));
            } catch (ScriptException e) {
                throw new RuntimeException(e);
            }
            return nashornScriptEngine;
        }
    };

    public  String renderLoginPage() {
        try {
            Object invokeFunction = engineHolder.get().invokeFunction("renderServer");
			Object html = invokeFunction;
            return String.valueOf(html);
        }
        catch (Exception e) {
            throw new IllegalStateException("failed to render react component", e);
        }
    }

    private Reader read(String path) {
        InputStream in = getClass().getClassLoader().getResourceAsStream(path);
        return new InputStreamReader(in);
    }
}