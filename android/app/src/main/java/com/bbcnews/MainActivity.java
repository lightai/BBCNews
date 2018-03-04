package com.bbcnews;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.view.View;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactInstanceManagerBuilder;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativenavigation.bridge.NavigationReactPackage;
import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {
    private static final String TAG = "MainActivity";

    private ReactInstanceManager reactInstanceManager;
    private ReactRootView reactRootView;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);
//
//        reactRootView = findViewById(R.id.react_root_view);
//        ReactInstanceManagerBuilder builder = ReactInstanceManager.builder()
//                .setApplication(getApplication())
//                .setJSMainModulePath("index.android")
//                .setUseDeveloperSupport(true)
//                .addPackage(new MainReactPackage())
//                .addPackage(new NavigationReactPackage())
//                .setInitialLifecycleState(LifecycleState.BEFORE_CREATE);
//        reactInstanceManager =  builder.build();
//
//        getWindow().getDecorView().addOnLayoutChangeListener(new View.OnLayoutChangeListener() {
//            @Override
//            public void onLayoutChange(View v, int left, int top, int right, int bottom, int oldLeft, int oldTop, int oldRight, int oldBottom) {
//                reactRootView.startReactApplication(reactInstanceManager, "Feed");
//                getWindow().getDecorView().removeOnLayoutChangeListener(this);
//            }
//        });
//
//        findViewById(R.id.title).setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                reactInstanceManager.showDevOptionsDialog();
//            }
//        });
    }

    @Override
    protected void onResume() {
        super.onResume();
//        reactInstanceManager.onHostResume(this, null);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
//        reactInstanceManager.onHostDestroy(this);
    }
}
