package com.bbcnews;

import com.brentvatne.react.ReactVideoPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.bridge.NavigationReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by hzwangpeng2015 on 2018/2/28.
 */
public class App extends NavigationApplication implements ReactApplication {
    int a = 2;
    @Override
    public ReactNativeHost getReactNativeHost() {
        return new ReactNativeHost(this) {
            @Override
            public boolean getUseDeveloperSupport() {
                return true;
            }

            @Override
            protected List<ReactPackage> getPackages() {
                return Arrays.<ReactPackage>asList(
                        new MainReactPackage());
            }
        };
    }

    @Override
    public boolean isDebug() {
        return true;
    }

    @android.support.annotation.Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.asList(
                new MainReactPackage(),
                new NavigationReactPackage(),
                new ReactVideoPackage());
    }
}
